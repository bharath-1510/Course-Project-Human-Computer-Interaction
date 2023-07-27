import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.application import MIMEApplication
from datetime import date
import random
from reportlab.pdfgen import canvas
from flask_pymongo import PyMongo
from flask import Flask, render_template,request, render_template_string
course_name = ["Data Driven Web Design","Python for Visual Art and Design",
                   "Full Stack Web Development with Python","Visual Web Design and Develpoment",
                   "Applied Datascience and Machine Learning","Python for DataScience"]
    
app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb+srv://Bharath:ivACg8iIOYAwB0gb@website0.d28galo.mongodb.net/HCI?retryWrites=true&w=majority'

mongo = PyMongo(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/stat')
def stat():
    return render_template('statistics.html')

@app.route('/course')
def course():
    return render_template('courses.html')

@app.route('/price')
def price():
    return render_template('pricing.html')
@app.route('/company')
def company():
    return render_template('companies.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')


@app.route('/pay',methods=['GET'])
def pay():
    code = request.args.get('code')            
    return render_template('payment.html',code=code)

@app.route('/final', methods=['POST'])
def final():
    name = request.form.get('name')
    email = request.form.get('email')
    code = request.form.get('code')
    phone = request.form.get('phone')
    db = mongo.db
    
    document = {'name': name, 'email': email, 'code': code,'phone':phone}
    db.login.insert_one(document)

    c = canvas.Canvas("invoice.pdf",pagesize=(200,250),bottomup=0)
    c.setFont("Helvetica-Bold",10)
    c.drawCentredString(100,20,"LEARNEX ACADEMY")
    c.line(45,22,155,22)
    c.setFont("Helvetica-Bold",5)
    c.drawCentredString(100,30,"Mount Road, Chennai, ")
    c.drawCentredString(100,35,"Tamil Nadu - 600002")
    c.setFont("Helvetica-Bold",6)
    c.drawCentredString(100,42,"GSTIN : ############")
    c.line(5,45,195,45)
    c.setFont("Courier-Bold",8)
    c.drawCentredString(100,55,"TAX-INVOICE")
    c.roundRect(15,63,170,40,10,stroke=1,fill=0)
    c.setFont("Times-Bold",5)
    c.drawRightString(100,70,"INVOICE No. :"+str(random.randint(50, 100)))
    today = date.today()
    formatted_date = today.strftime("%d-%m-%Y")
    c.drawRightString(100,80,"DATE :"+formatted_date)
    c.drawRightString(100,90,"CUSTOMER NAME :"+name)
    c.drawRightString(100,100,"PHONE No. :"+phone)
    co=["Freemium Courses are offered","Standard Price Courses are offered","Preemium Courses are offered"]
    c.roundRect(15,108,170,130,10,stroke=1,fill=0)
    c.drawCentredString(100,118,co[int(code)])
    c.drawString(20,225,"We declare that above mentioned")
    c.drawString(20,230,"information is true.")
    c.drawString(20,235,"(This is system generated invoive)")
    c.drawRightString(170,235,"Authorised Signatory")
    c.setFont("Helvetica",7)
    c.drawString(110,224,"LEARNEX ACADEMY")
    c.showPage()
    c.save()
    sender_email = 'minem4509@gmail.com'
    receiver_email = email
    subject = 'Thanks for choosing us'
    body = 'here is ur invoice!!!'
    pdf_file = 'invoice.pdf'
    display_name="LEARNEX ACADEMY"
    message = MIMEMultipart()
    message['From'] = sender_email
    message['To'] = receiver_email
    message['Subject'] = subject
    message.attach(MIMEText(body, 'plain'))
    with open(pdf_file, 'rb') as attachment:
        part = MIMEApplication(attachment.read(), _subtype='pdf')
    part.add_header('Content-Disposition', f'attachment; filename=LEARNEX ACADEMY.pdf')
    part.add_header('Content-Description', f'filename="{display_name}.pdf"')
    message.attach(part)
    with smtplib.SMTP('smtp.gmail.com', 587) as server:
        server.starttls()
        server.login(sender_email, 'vwbuywzbludqtdzo')
        server.send_message(message)


    js_code = """
    <script>
        alert('Success');
        window.location.href = '/';  
    </script>
    """
    return render_template_string(js_code)
@app.route('/course_single',methods=['GET'])
def course_single():
    code = int(request.args.get('code'))
    content_1=["Data-driven web design is an iterative process that relies on analyzing user data to inform design decisions. By studying user    behavior, preferences, and feedback, designers can create more  effective and engaging web experiences. This approach involves collecting and analyzing data from various sources, such as website analytics and user testing, to gain insights into user patterns and pain points. Designers can then use this information  to optimize user interfaces, layouts, and content placement.     Through continuous monitoring and refinement, data-driven design  ensures that the website evolves to meet user needs and achieve   business goals."
               ,"Python is a versatile programming language that can be used for creating visual art and designs. Here are a few aspects and libraries commonly used for visual art and design in Python:Turtle Graphics: The turtle module provides a simple and intuitive way to create graphics and draw shapes using a turtle metaphor. It allows you to control a virtual turtle and create various patterns and designs.Pygame: Pygame is a popular library for game development, but it can also be used for creating interactive visual art and designs. It provides functions for drawing shapes, handling user input, and creating animations.Matplotlib: Matplotlib is a powerful library for creating static, animated, and interactive visualizations in Python. It offers a wide range of plotting functions to create charts, graphs, and other visual representations of data.Processing: Although not a native Python library, Processing is a flexible and widely used visual arts and design platform that has a Python mode. It provides an intuitive IDE and a comprehensive set of tools for creating interactive visuals, animations, and generative art.OpenCV: OpenCV (Open Source Computer Vision Library) is primarily used for computer vision tasks, but it can also be used for image processing and artistic applications. It allows you to manipulate images, apply filters, and create artistic effects."
               ,"Full stack web development refers to the process of creating a complete web application that includes both the frontend (client-side) and the backend (server-side) components. In the context of Python, full stack web development involves using Python programming language and related frameworks and tools to build all aspects of a web application, from the user interface to the server logic and database interactions.Here's a breakdown of the key components involved in full stack web development in Python:Frontend Development: This involves creating the user interface and client-side functionality of the web application. In Python, popular frontend frameworks and libraries include:HTML (Hypertext Markup Language) for structuring web pages.CSS (Cascading Style Sheets) for styling the web pages.JavaScript for adding interactivity and dynamic behavior to the web pages. Python frameworks like Flask and Django can also be used to generate dynamic HTML templates.Backend Development: This involves building the server-side logic and handling the business logic of the web application. In Python, common backend frameworks include:Flask: A lightweight and flexible web framework that allows you to quickly build web applications.Django: A robust and feature-rich web framework that follows the Model-View-Controller (MVC) architectural pattern.Database Management: Full stack web development often requires interacting with a database to store and retrieve data. Python provides several libraries and frameworks for database management, including:SQLAlchemy: A popular Python SQL toolkit and Object-Relational Mapping (ORM) library.Django ORM: The built-in ORM provided by Django for database interactions.Deployment and Hosting: Once the web application is developed, it needs to be deployed and hosted on a server to make it accessible to users. Python-based web applications can be deployed on various hosting platforms, including cloud-based services like Heroku, AWS, or traditional web servers like Apache or Nginx.Testing and Debugging: Testing and debugging are essential aspects of web development to ensure the quality and functionality of the application. Python provides various testing frameworks, such as pytest and unittest, to write and execute tests for different components of the web application.Full stack web development in Python allows developers to work on both the frontend and backend aspects of a web application, providing end-to-end control and flexibility. It leverages the power and versatility of Python, along with its rich ecosystem of frameworks and libraries, to build robust and scalable web applications."
               ,"Visual web design and development is the process of creating visually appealing and engaging websites by combining design principles and technical skills. It involves the integration of aesthetics, user experience (UX) design, and frontend development to create websites that are both visually appealing and functional.Here are some key aspects of visual web design and development:Visual Design: Visual design focuses on creating attractive and visually consistent elements for the website, such as color schemes, typography, layouts, graphics, and images. It involves selecting appropriate colors, fonts, and visual elements to create a visually cohesive and aesthetically pleasing design.User Experience (UX) Design: UX design involves creating a positive and intuitive user experience by considering the needs, expectations, and behaviors of the website's target audience. It includes designing user interfaces, navigation structures, information architecture, and interactive elements to ensure usability and enhance the overall user experience.Responsive Design: With the increasing use of mobile devices, responsive design has become crucial. It involves creating websites that adapt and respond to different screen sizes and devices, ensuring an optimal user experience across desktops, tablets, and mobile phones.HTML/CSS: HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) are fundamental technologies used in frontend web development. HTML is used to structure the content and define the elements of a webpage, while CSS is used to style and position those elements.UI Frameworks and Libraries: There are various UI frameworks and libraries available, such as Bootstrap, Material-UI, and Foundation, that provide pre-designed components, styles, and responsive layouts to streamline the development process and create visually appealing websites.Graphics and Multimedia: Visual web design often incorporates graphics, images, videos, and other multimedia elements to enhance the visual appeal and engage users. Tools like Adobe Photoshop, Illustrator, or online resources can be used to create and optimize graphics for the web.Browser Compatibility: Web developers need to ensure that websites are compatible with different web browsers (e.g., Chrome, Firefox, Safari, Edge) and their various versions. This involves testing and ensuring consistent rendering and functionality across multiple browsers.Visual web design and development combine creativity, technical skills, and an understanding of user needs to create visually compelling websites that deliver an exceptional user experience. It is a collaborative process involving designers, developers, and other stakeholders working together to bring a website to life.",
               "Applied Data Science and Machine Learning involves the practical application of data science techniques and machine learning algorithms to real-world problems and domains. It focuses on using data-driven approaches to extract insights, make predictions, and solve complex problems using machine learning models and statistical analysis. Here are some key aspects of applied data science and machine learning:Data Collection and Preparation: The first step in applied data science is to gather and preprocess data from various sources. This involves identifying relevant data sources, cleaning and transforming the data, handling missing values, and performing feature engineering to extract meaningful features from the raw data.Exploratory Data Analysis (EDA): EDA is the process of analyzing and visualizing the data to gain insights and understand the underlying patterns and relationships. It involves statistical techniques, data visualization, and data summarization to identify trends, outliers, and correlations within the data.Machine Learning Modeling: Once the data is prepared and explored, machine learning models can be built to make predictions or classify data. This includes selecting appropriate algorithms, splitting the data into training and testing sets, training the model on the training data, and evaluating its performance using various metrics.Feature Selection and Model Tuning: Feature selection involves identifying the most relevant features that contribute to the model's performance while eliminating noise or redundant information. Model tuning aims to optimize the model's hyperparameters to improve its performance and generalization ability.Deployment and Monitoring: After developing a machine learning model, it needs to be deployed into a production environment where it can be used to make predictions or automate certain tasks. Monitoring the model's performance and updating it with new data or improvements is essential to ensure its accuracy and reliability over time.Applied data science and machine learning are widely used in various domains such as healthcare, finance, marketing, and more. It involves the application of programming languages like Python or R, along with libraries and frameworks such as scikit-learn, TensorFlow, and PyTorch, to implement and deploy machine learning models. The goal is to leverage the power of data and algorithms to solve real-world problems, make data-driven decisions, and drive business insights and innovation.","Python is widely used in the field of data science due to its simplicity, versatility, and the availability of numerous libraries and tools specifically designed for data analysis and machine learning. Here are some key aspects of Python for data science:Data Manipulation and Analysis: Python provides powerful libraries such as NumPy and pandas for efficient data manipulation, analysis, and preprocessing. These libraries offer various functions and data structures to handle numerical operations, perform data cleaning, reshape data, and handle missing values.Data Visualization: Python offers popular data visualization libraries like Matplotlib and Seaborn, which enable the creation of visually appealing charts, graphs, and plots. These libraries provide flexibility and customization options to create informative and insightful visual representations of data.Machine Learning: Python's ecosystem includes scikit-learn, one of the most widely used libraries for machine learning. It provides a comprehensive set of algorithms and tools for classification, regression, clustering, dimensionality reduction, and model evaluation. Python also offers frameworks like TensorFlow and PyTorch for deep learning and neural network-based models.Statistical Analysis: Python has built-in statistical libraries such as scipy and statsmodels that facilitate statistical analysis. These libraries offer functions for hypothesis testing, probability distributions, regression analysis, ANOVA, and more.Data Science Workflow and Integration: Python supports the end-to-end data science workflow. Jupyter Notebook and JupyterLab provide an interactive coding environment for exploratory data analysis, experimentation, and documentation. Python integrates well with other tools and languages, making it easy to incorporate data science workflows into existing systems and collaborate with other team members.Python's popularity in the data science community is also attributed to its extensive community support, vast range of third-party libraries, and active development community. It is highly regarded for its readability, ease of use, and the ability to quickly prototype and implement data science solutions.Overall, Python is a versatile and powerful language for data science, enabling professionals to perform data manipulation, analysis, visualization, and machine learning tasks efficiently and effectively."]
    content_2=["Creating a data-driven web design involves a systematic approach to leverage user data for informed design decisions. Firstly, the        process begins by collecting diverse data sources, including      website analytics, user surveys, and user testing, to gain a      comprehensive understanding of user behavior. Next, through      careful analysis of this data, designers can identify meaningful      insights and patterns that shed light on user preferences, pain         points, and engagement patterns. Armed with these insights,          designers can then apply data-driven strategies to optimize          various design elements, such as layouts, navigation, and content           placement, ensuring a user-centric approach. This iterative            process of data collection, analysis, and design optimization            allows websites to continuously evolve and adapt to user needs,            resulting in more effective and engaging web experiences."
               ,"Generative art refers to artworks that are created or generated using algorithms, rules, or procedures rather than traditional manual techniques. It involves using code or computational processes to create unique and often unpredictable visual or audiovisual compositions. Generative art embraces randomness, algorithms, and automation to produce art that evolves or is created in real-time.The process of creating generative art involves defining a set of rules or algorithms that determine how the artwork evolves or is generated. These rules can be based on mathematical formulas, randomization, iterative processes, or even data inputs. By manipulating parameters or inputs, the artist can generate a wide range of variations and explore different artistic possibilities."
               ,"Creating a new Django project:The command django-admin startproject myproject creates a new Django project named 'myproject'. This command sets up the project structure and configuration files.Navigating to the project directory:The command cd myproject is used to change the current working directory to the myproject directory, which is where your Django project files are located.Creating a new Django app:The command python manage.py startapp myapp creates a new Django app named myapp. An app is a self-contained module that contains models, views, templates, and other components specific to a certain functionality or feature of the project.Defining a simple view:In the 'views.py' file within the 'myapp' directory, the code defines a simple view called hello. This view takes a request object as a parameter and returns an HTTP response with the text 'Hello, Django!'.Configuring a URL pattern:In the 'urls.py' file within the 'myproject' directory, the code configures a URL pattern using the path function from Django's urls module. The pattern specifies that when the user visits the URL '/hello/', the hello view defined in step 4 should be invoked.These five lines of code set up a basic Django project with a single app, define a simple view that returns a greeting, and configure a URL pattern to map the view to a specific URL. This is just the starting point, and you would typically add more views, models, templates','Web design is the process of creating the visual layout and aesthetics of a website, including its colors, typography, graphics, and overall style.It focuses on arranging and organizing elements on web pages to ensure a visually pleasing and user-friendly experience.Good web design considers factors such as usability, accessibility, and user experience (UX) to enhance the effectiveness and engagement of a website.Web designers utilize tools such as graphic design software, color theory, and typography principles to create visually appealing and cohesive designs.Effective web design strikes a balance between aesthetics and functionality, ensuring that the website is visually appealing while providing a seamless and intuitive user experience.Web design is a multidisciplinary field that combines artistic creativity, technical knowledge, and an understanding of user behavior. It plays a vital role in attracting and engaging website visitors, conveying information effectively, and building a strong online presence for individuals and businesses.",
               "Applied data analytics refers to the practical application of data analysis techniques to gain insights, solve problems, and make informed decisions in various domains. It involves the use of statistical analysis, data mining, visualization, and other analytical methods to extract meaningful information from large and complex datasets.Here are some key aspects of applied data analytics:Data Collection and Cleaning: The process begins with gathering relevant data from various sources, including databases, spreadsheets, APIs, or web scraping. The collected data may require cleaning and preprocessing to handle missing values, outliers, and inconsistencies.Exploratory Data Analysis (EDA): EDA involves exploring and visualizing the data to understand its structure, patterns, and relationships. Techniques such as summary statistics, data visualization, and correlation analysis are used to uncover insights, detect anomalies, and identify trends or patterns.Statistical Analysis: Statistical analysis techniques are applied to draw conclusions, make inferences, and validate hypotheses based on the data. This may involve hypothesis testing, regression analysis, time series analysis, or other statistical methods depending on the nature of the data and the research questions.Data Visualization: Visualizing data through charts, graphs, and interactive visualizations helps to communicate insights effectively. Data visualization techniques are used to present complex information in a visually appealing and easily understandable format, enabling stakeholders to grasp trends, patterns, and relationships in the data.Decision-Making and Recommendations: The findings and insights obtained from data analysis are used to inform decision-making processes. Data analytics can provide recommendations, predictions, or actionable insights to drive improvements, optimize processes, or support strategic planning.Applied data analytics is employed in various industries and domains, including business, healthcare, finance, marketing, and more. It leverages tools and technologies such as programming languages (Python, R, SQL), data analytics platforms (Tableau, Power BI), statistical packages (numpy, pandas, scipy), and machine learning algorithms to extract valuable insights from data. The ultimate goal is to transform data into actionable knowledge, enabling organizations to make data-driven decisions and gain a competitive ",
               "Data visualization is the graphical representation of data using visual elements such as charts, graphs, and maps. It helps in understanding complex datasets, identifying patterns, trends, and relationships, and communicating insights effectively. Here are some key aspects of data visualization:Visual Encoding: Data visualization uses visual encodings to represent data attributes. These encodings include position, length, angle, color, shape, and size, which are mapped to the data variables such as numeric values, categories, or time. Choosing appropriate encodings ensures accurate representation and effective communication of data.Charts and Graphs: Various types of charts and graphs are used to visualize different types of data. Some commonly used charts include bar charts, line charts, scatter plots, histograms, pie charts, and heatmaps. Each type of chart is suitable for representing specific data relationships and patterns.Exploratory Data Analysis (EDA): Data visualization plays a crucial role in exploratory data analysis. By creating interactive and dynamic visualizations, analysts can explore the data from different angles, filter and drill down into specific subsets, and discover insights or anomalies that may not be apparent in raw data.Dashboard Creation: Data visualization is often used to create interactive dashboards that provide a consolidated view of key metrics, trends, and performance indicators. Dashboards allow users to monitor and analyze data in real-time, make data-driven decisions, and track progress towards specific goals.Storytelling and Communication: Effective data visualization helps in telling a compelling story and communicating insights to various stakeholders. By using clear labels, titles, and annotations, and by designing visualizations with a focus on clarity and simplicity, data storytellers can convey complex information in a concise and understandable manner.Tools and Libraries: There are numerous tools and libraries available for data visualization in different programming languages. Popular options include Python libraries like Matplotlib, Seaborn, and Plotly, JavaScript libraries like D3.js and Highcharts, and data visualization software such as Tableau and Power BI.Data visualization is an essential component of data analysis and storytelling. It enhances the understanding of data, facilitates decision-making, and enables effective communication of insights. By presenting data visually, patterns and trends can be easily identified, making it a powerful tool for exploring and communicating complex information."]   
    link=["https://www.youtube.com/embed/sLq2NRf0xq4","https://www.youtube.com/embed/9NQVRFnkb1E","https://www.youtube.com/embed/xyJdDxOSmV0","https://www.youtube.com/embed/B-ytMSuwbf8","https://www.youtube.com/embed/opX_9c2V9f4",
          "https://www.youtube.com/embed/LHBE6Q9XlzI"]
    return render_template('course-single.html',c1=course_name[code-1],c2=content_1[code-1],c3=content_2[code-1],c4=link[code-1],code=code)

@app.route('/comment', methods=['POST','GET'])
def comment():
    name = request.form.get('name')
    email = request.form.get('email')
    code = int(request.form.get('code'))
    msg = request.form.get('msg')
    db = mongo.db
    document = {'name': name, 'email': email ,'course_name':course_name[code-1],'msg':msg}
    db.comment.insert_one(document)
    sender_email = 'minem4509@gmail.com'
    receiver_email = "bmkvs541@gmail.com"
    subject = 'Comment for Courses'
    body = msg+" by "+name+" ("+email+")"
    message = MIMEMultipart()
    message['From'] = sender_email
    message['To'] = receiver_email
    message['Subject'] = subject
    message.attach(MIMEText(body, 'plain'))
    with smtplib.SMTP('smtp.gmail.com', 587) as server:
        server.starttls()
        server.login(sender_email, 'vwbuywzbludqtdzo')
        server.send_message(message)
    js_code = """
    <script>
        alert('Success');
        window.location.href = '/course';  
    </script>
    """
    return render_template_string(js_code)

@app.route('/contact_', methods=['POST'])
def contact_():
    name = request.form.get('name')
    email = request.form.get('email')
    phone = request.form.get('phone')
    msg = request.form.get('msg')
    db = mongo.db
    
    document = {'name': name, 'email': email ,'phone':phone,'msg':msg}
    db.feedback.insert_one(document)
    sender_email = 'minem4509@gmail.com'
    receiver_email = "bmkvs541@gmail.com"
    subject = 'Feedback for Website'
    body = msg+" by "+name+" ("+email+")"
    message = MIMEMultipart()
    message['From'] = sender_email
    message['To'] = receiver_email
    message['Subject'] = subject
    message.attach(MIMEText(body, 'plain'))
    with smtplib.SMTP('smtp.gmail.com', 587) as server:
        server.starttls()
        server.login(sender_email, 'vwbuywzbludqtdzo')
        server.send_message(message)
    js_code = """
    <script>
        alert('Success');
        window.location.href = '/contact';  
    </script>
    """
    return render_template_string(js_code)

f1 = ["Name","Email","Phone number","Code","Message","Course Name"]
@app.route('/table1')
def table1():
    db = mongo.db
    first = db.login.find()
    return render_template("display1.html",first=first,f1=[f1[0],f1[1],f1[2],f1[3]])

@app.route('/table2')
def table2():
    db = mongo.db
    first = db.comment.find()
    return render_template("display.html",first=first,f1=[f1[0],f1[1],f1[4],f1[5]])

@app.route('/table3')
def table3():
    db = mongo.db
    first = db.feedback.find()
    return render_template("display2.html",first=first,f1=[f1[0],f1[1],f1[2],f1[4]])