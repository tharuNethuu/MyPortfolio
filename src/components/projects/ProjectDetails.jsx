import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProjectDetails.scss'; // Create a CSS file for styling

const projects = [
  // Same array of projects as defined in Portfolio
  {
    id: 1,
    title: "Patient Management System",
    video: "https://www.youtube.com/embed/m0MnLm-z630?si=RE8P6ZO_gFVZHVxM",
    desc: "<b>Project Overview</b> \nPatient Management Add, Update, Delete: Easily manage patient records including adding new patients, updating existing records, and deleting outdated information. \nPatient Details: Store critical information such as patient ID, name, address, phone number, age, blood type, major diseases, and gender. \nDiagnosis Management Symptom Tracking: Record detailed symptoms for each patient. \nDiagnosis and Treatment: Log diagnoses and prescribed medications for efficient follow-up and treatment plans. \nUpdate Diagnoses: Easily update and manage ongoing treatment records. Reporting eport Generation: Generate comprehensive diagnosis reports that include date and time stamps, ensuring accurate and timely documentation. \nPrint Functionality: Easily print reports for physical records or patient handouts. \n\n<b>Technologies Used:</b>\nDevelopment: C# and .NET Framework: The core application is developed using C# within the .NET Framework, providing a robust and scalable foundation.Windows Forms: Utilized for building the graphical user interface (GUI), ensuring a user-friendly and intuitive experience. \nDatabase Management: SQL Server: Employed for managing all patient and diagnosis data, ensuring data integrity and security. \nSQL Queries: Used for efficient data manipulation and retrieval, supporting the application's dynamic requirements.\nDesign:Figma: Used for prototyping and designing the user interface, enabling a clear and visually appealing layout.\n\n<b>Usage and Benefits:</b>\nThis healthcare management system simplifies the workflow for doctors by providing a centralized platform to manage patient records and diagnoses. It minimizes the administrative burden, allowing healthcare professionals to focus more on patient care. The ability to generate and print reports ensures that all necessary documentation is readily available and up-to-date.\n\n<b>Additional Information</b> \n\nFigma Prototype: Explore the design and user interface of our application here.\n\nAccess and modify our project code for your own needs here.This project was developed as part of our 3rd semester Programming Project module, showcasing our skills in software development, database management, and user interface design. We (with Vidumini Athapaththu) hope this project can serve as a valuable resource and inspiration for your future projects."
  },
  {
    id: 2,
    title: "CoinTracker - Personal Budget Tracker App",
    video: "https://www.youtube.com/embed/Wp9vdeRbvNk?si=FIGj8xEeboKfagUX",
    desc: "This project, created with Vidumini Athapaththu , is a comprehensive personal finance tracker developed as a 3rd semester assignment for the GUI Programming module. The project spans six pages, each built using HTML, JavaScript, and CSS, and aims to help users manage and track their personal finances effectively.<b>\n\nProject Overview</b>.\n\n 1. Figma Design  - We began by designing the user interface in Figma to ensure a seamless and user-friendly experience. This design phase allowed us to visualize the application's layout and functionalities before moving into development. \n2. Login Page  - The login page is visually appealing, featuring animations that add a lively touch to the user experience. Users must fill in their email and password to log in. The email field is validated using HTML’s `type=email` attribute, ensuring users enter a correctly formatted email address.\n3.Dashboard - Upon logging in, users are greeted with a dashboard that provides a clear overview of their financial status. The dashboard displays a comparison of income versus expenses over the last 7 months, helping users understand their financial trends. It also highlights the highest expenses from the previous month, allowing users to identify significant spending areas. Additionally, users can view their personal details, which helps in personalizing the user experience.\n4. Income Page - The income page is designed for users to add and manage their income sources. Users can input details about their various income streams, and the application categorizes and sums these entries to provide a total income value. This feature helps users keep track of all their earnings in one place.\n5. Expenses Page   - The expenses page is equally detailed, allowing users to log their expenditures across a wide range of categories. The page is designed to be comprehensive, accommodating numerous expense types to give a full picture of the user's spending habits. At the bottom of the page, the total expenses value is displayed, offering a quick summary of the user’s outgoings.\n\n<b>Technologies Used</b>\n\n- HTML: For the structure and layout of the web pages.\n- CSS: For styling and ensuring the application is visually appealing and responsive.\n- JavaScript: For interactivity and dynamic features, such as form validation, data visualization, and real-time updates.\n- Figma: For the initial design and prototyping, which guided the development process.\n\n<b>Challenges and Learning Outcomes</b><n>Throughout the project, we encountered several challenges:\n\n- Design Consistency: Ensuring a consistent look and feel across all pages required meticulous attention to detail in both the Figma design and the CSS styling.\n- Data Management: Implementing efficient methods to handle and display user data dynamically was a key challenge, addressed using JavaScript.\n- User Experience: Balancing functionality with user-friendliness was crucial, particularly in designing intuitive navigation and clear data visualizations. \n\nFigma Prototype: Explore the design and user interface of our application here.      <a href='https://www.figma.com/community/file/1376896788245507292/cointracker'>https://www.figma.com/community/file/1376896788245507292/cointracker</a>\n\nGitHub Repository: <a href='https://github.com/tharuNethuu/Gui-Project---Budget-Tracker-'>https://github.com/tharuNethuu/Gui-Project---Budget-Tracker-</a>\n\nThis personal finance tracker project has provided invaluable experience in both design and development, equipping us with skills in creating user-centric applications. The final product is a robust tool that not only helps users track their finances but also provides insights into their spending habits, empowering them to make informed financial decisions."
  },
  {
    id: 3,
    title: "Restaurant Logistics System",
    desc: "The Restaurant Logistics System is a database management system designed to streamline restaurant operations. It manages suppliers, employees, deliveries, products, customers, orders, and reviews, ensuring efficient and organized handling of all logistical aspects. This system supports functionalities such as adding, updating, and deleting records for suppliers, employees, products, customers, and orders, along with tracking deliveries and managing customer reviews.\n\n<b>Key Functionalities:</b>\n\nSupplier Management: Add, update, and delete supplier details.\nEmployee Management: Add, update, and delete employee records.\nDelivery Management: Record and track deliveries.\nProduct Management: Add, update, and delete products.\nCustomer Management: Add, update, and delete customer details.\nOrder Management: Place, update, and track orders.\nReview Management: Submit and view customer reviews.\n\n<b>Data Structure:</b>\n\nSuppliers: First Name, Last Name, Email, Phone Number.\nEmployees: First Name, Last Name, Position, Date of Birth, Age, Manager ID.\nDeliveries: Supplier ID, Employee ID, Delivery Date.\nProducts: Product ID, Supplier ID, Product Name.\nCustomers: First Name, Last Name, Email, Phone Number.\nOrders: Customer ID, Employee ID, Order Date.\nReviews: Customer ID, Employee ID, Supplier ID, Product ID, Order ID, Review Date, Comments, Ratings, Experience.\n\nThis system ensures data integrity and enhances operational efficiency within the restaurant environment.\n\nFor a detailed report on the project, including the full database schema, functional requirements, and sample data operations, you can access the PDF report here.\n<a href=” https://drive.google.com/file/d/1m8p6pov-IO6EKEEh532D7rDwGJw2kOr5/view?usp=sharing”> https://drive.google.com/file/d/1m8p6pov-IO6EKEEh532D7rDwGJw2kOr5/view?usp=sharing</a>"
  },
  {
    id: 4,
    title: "Fraud Detection Tool for Bank Transactions",
    video: "https://www.youtube.com/embed/kT5OyiiLmnE?si=DVao98AJzVX1OqtZ",
    desc: "This project is a web-based application designed to identify fraudulent bank transactions using a machine learning model. Users can input transaction details such as transaction type, amount, old balance, and new balance to determine if a transaction is fraudulent. The application leverages a trained Decision Tree Classifier to make predictions and provides an intuitive user interface for ease of use.\n\n<b>Key features include:</b>\n\nUser Input Form: Users can enter transaction details through a web form.\nReal-time Prediction: The machine learning model predicts whether the transaction is fraudulent based on the input data.\nResult Display: The prediction result is displayed on a separate page, indicating if the transaction is fraudulent or not.\nModel Accuracy: The application provides the accuracy of the model for user awareness.\n\nThe application is built using Flask for the backend, with HTML and CSS for the front-end interface.\n\nyou can access the code here.\n<a href=” https://github.com/tharuNethuu/online-payment-fraud-detector”> https://github.com/tharuNethuu/online-payment-fraud-detector</a>"
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  if (!project) return <div>Project not found</div>;

  
  return (
    <div className="project-details">
      <div className="back-button">
        <Link to="/">
          <span> Back to Portfolio</span>
        </Link>
      </div>
      <h4>{project.title}</h4>
      {project.video && (
        <div className='projectVideo'>
          <iframe 
            src={project.video} 
            title={project.title} 
            width="100%" 
            height="500px" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      )}
      <div className="description">
      <p dangerouslySetInnerHTML={{ __html: project.desc.replace(/\n/g, '<br />') }}></p>

          </div>
    </div>
  );
};

export default ProjectDetails;
