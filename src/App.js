import React from 'react';
import './App.css';
import './Content/bootstrap.css'
import './Content/resume.css'
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="App">

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Joel Derrick</span>
          <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="./img/IMG_20190629_170527.jpg" alt="" />
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#interests">Interests</a>
            </li>
            {/*<li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#awards">Awards</a>
            </li>*/}
          </ul>
        </div>
      </nav>

      <div className="container-fluid p-0">

        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
          <div className="w-100">
            <h1 className="mb-0">Joel
          <span className="text-primary">Derrick</span>
            </h1>
            <div className="subheading mb-5">Madambakkam, Chennai. +91 9629411059 ·
          <a href="mailto:name@email.com">joel.derrickclad@gmail.com</a>
            </div>
            <p className="lead mb-5">Full stack .NET developer with a keen interest in design and development of Microsoft web and desktop applications.</p>
           
            
            <div className="social-icons">
               <ul className="social-network social-circle">
                        <li><a href="https://stackoverflow.com/users/5352831/joee" target='_blank' className="icoStack" title="Rss"><i className="fa fa-stack-overflow"></i></a></li>
                        <li><a href="https://github.com/joelderrickclad" target='_blank' className="icoGit" title="Facebook"><i className="fa fa-github"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/joelderrickclad/" target='_blank' className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                    </ul>	
            </div>
          </div>
        </section>

        <hr className="m-0" />

        <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
          <div className="w-100">
            <h2 className="mb-5">Experience</h2>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">Senior Software Engineer</h3>
                <div className="subheading mb-3">WELLS FARGO PVT LTD</div>
                <p>Involved in system analysis, design, workflow, development, testing and maintaining web based applications.</p>
                <p>Worked with applications utilizing technologies AngularJS, ReactJS, Angular, MVC, Web API2 and Bootstrap.</p>
                <p>Identifies and implements improvements to existing store procedures and team processes to enhance efficiency.</p>
                <p>Identifies and escalates issues and risks in a timely manner to the Team Lead/project manager so that project risk can be mitigated with minimal impact.</p>
                <p>Works closely with team members in US in each sprint and contributing to technical discussions.</p>   
                <p>Continuous integration and continuous Deployment using TFS.</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">April 2018 - Present</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">Software Engineer</h3>
                <div className="subheading mb-3">TRANSCENTRA FTS PVT LTD</div>
                <p>Worked with various Windows platforms and tools, ASP.NET, Desktop Application development, IIS 7.0, and SQL Server 2005, 2008 R2, and 2012.</p>
                <p>Responsible for Electronic Clearing Service (ECS) module, by which amount from customers account can be deposited to the client account electronically.</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">January 2017 - March 2018</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">Software Developer</h3>
                <div className="subheading mb-3">JIJI Technologies PVT LTD</div>
                <p>Analyzed and developed products in DOT Net technology as per the client requirements.</p>
                <p>Handled different types of issues and perform unit testing.</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">November 2014 - December 2016</span>
              </div>
            </div>
          </div>

        </section>

        <hr className="m-0" />

        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
          <div className="w-100">
            <h2 className="mb-5">Education</h2>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">Dr. Mahalingam College of Engineering and Technology</h3>
                <div className="subheading mb-3">Bachelor of Engineering</div>
                <div>Electronics and Communication Engineering</div>
                <p>GPA: 7.6</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">August 2010 - April 2014</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
              <div className="resume-content">
                <h3 className="mb-0">RoseMary High School</h3>
                <div className="subheading mb-3">Computer Science</div>
                <p>GPA: 9.2</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">March 2009 - May 2010</span>
              </div>
            </div>

          </div>
        </section>

        <hr className="m-0" />

        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
          <div className="w-100">
            <h2 className="mb-5">Skills</h2>

            <div className="subheading mb-3">Programming Languages &amp; Tools</div>
             <ul className="fa-ul mb-0">
              <li>
                <i className="fa-li fa fa-check"></i>
                Programming Languages: C#.NET, VB.NET, XAML.</li>
              <li>
                <i className="fa-li fa fa-check"></i>
                Microsoft Technologies: ASP.NET 2.0/3.5/4.0, MVC, WPF 3.5, WCF, Win Forms, Web Forms, LINQ.</li>
              <li>
                <i className="fa-li fa fa-check"></i>
                Scripting Language:  HTML 5.0, JavaScript , jQuery, Localize JS.</li>
              <li>
                <i className="fa-li fa fa-check"></i>
                RDBMS:  SQL SERVER 2008R2, MSSQL T-SQL.</li>
                <li>
                <i className="fa-li fa fa-check"></i>
                Framework: DOT NET Framework 3.5/4.0/4.5, DURANDAL, Entity Framework.</li>
                <li>
                <i className="fa-li fa fa-check"></i>
                Tools: Visual Studio 2013, Visual Studio 2015, Microsoft Team Foundation Server (TFS), SQL Management Studio 2008R2, GitHub, JIRA.</li>
                <li>
                <i className="fa-li fa fa-check"></i>
                Web Technologies: CSS, AJAX, Knockout Js, React Js, Angular JS, Angular 4/5/6.</li>
                <li>
                <i className="fa-li fa fa-check"></i>
                Others: Active Directory, Group Policy Management, JSON and basic knowledge on Microservices, SQL Server Integration Services(SSIS), SQL Server Reporting Services (SSRS).</li>
            </ul>

            <div className="subheading mb-3">Workflow</div>
            <ul className="fa-ul mb-0">
              <li>
                <i className="fa-li fa fa-check"></i>
                Mobile-First, Responsive Design</li>
              <li>
                <i className="fa-li fa fa-check"></i>
                Cross Browser Testing &amp; Debugging</li>
              <li>
                <i className="fa-li fa fa-check"></i>
                Cross Functional Teams</li>
              <li>
                <i className="fa-li fa fa-check"></i>
                Agile Development &amp; Scrum</li>
            </ul>
          </div>
        </section>

        <hr className="m-0"/>

          <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
            <div className="w-100">
              <h2 className="mb-5">Personal Skills</h2>
               <ul className="fa-ul mb-0">
              <li>
                <i className="fa-li fa fa-check"></i>
                Strong Analytical and programming skills in using technology to develop effective complex business solutions.</li>
              <li>
                <i className="fa-li fa fa-check"></i>
                Ability to adapt quickly to the changes in the working environment.</li>
              <li>
                <i className="fa-li fa fa-check"></i>
                Flexible to time demand, Quick learner, Self-Starter.</li>
              <li>
                <i className="fa-li fa fa-check"></i>
                Can work under pressure to meet deadlines.</li>
                 <li>
                <i className="fa-li fa fa-check"></i>
                Flexible team player.</li>
                 <li>
                <i className="fa-li fa fa-check"></i>
                Good work ethics with professional, precise communication skills.</li>
            </ul>
              
            </div>
          </section>

          <hr className="m-0"/>

            {/*<section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
              <div className="w-100">
                <h2 className="mb-5">Awards &amp; Certifications</h2>
                <ul className="fa-ul mb-0">
                  <li>
                    <i className="fa-li fa fa-trophy text-warning"></i>
                    Google Analytics Certified Developer</li>
                  <li>
                    <i className="fa-li fa fa-trophy text-warning"></i>
                    Mobile Web Specialist - Google Certification</li>
                  <li>
                    <i className="fa-li fa fa-trophy text-warning"></i>
                    1<sup>st</sup>
                    Place - University of Colorado Boulder - Emerging Tech Competition 2009</li>
                  <li>
                    <i className="fa-li fa fa-trophy text-warning"></i>
                    1<sup>st</sup>
                    Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)</li>
                  <li>
                    <i className="fa-li fa fa-trophy text-warning"></i>
                    2<sup>nd</sup>
                    Place - University of Colorado Boulder - Emerging Tech Competition 2008</li>
                  <li>
                    <i className="fa-li fa fa-trophy text-warning"></i>
                    1<sup>st</sup>
                    Place - James Buchanan High School - Hackathon 2006</li>
                  <li>
                    <i className="fa-li fa fa-trophy text-warning"></i>
                    3<sup>rd</sup>
                    Place - James Buchanan High School - Hackathon 2005</li>
                </ul>
              </div>
            </section>*/}

  </div>

    </div>
        );
}

export default App;
