// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './css/resumepage.css';
// import jsPDF from 'jspdf';
// import { getResumeRoute } from '../utils/frontendRoutes';

// function Resume() {
//   const [pName, setPName] = useState(null);
//   const [personalDetails, setPersonalDetails] = useState({
//     name: '',
//     email: '',
//     phoneNumber: '',
//     image: '',
//   });
//   const [address, setAddress] = useState({
//     streetAddress: '',
//     city: '',
//     state: '',
//     zipCode: '',
//     country: '',
//   });
//   const [education, setEducation] = useState([]);
//   const [achievements, setAchievements] = useState([]);
//   const [workExperience, setExperience] = useState([]);
//   const [projects, setProjects] = useState([]);
//   const [skills, setSkills] = useState([]);

//   const [data1, setData1] = useState({});
//   const [data2, setData2] = useState({});
//   const [data3, setData3] = useState({});
//   const [data4, setData4] = useState({});
//   const [data5, setData5] = useState({});
//   const [data6, setData6] = useState({});
//   const [data7, setData7] = useState({});

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const rspns = await axios.get(getResumeRoute);
//       const response = rspns.data;
//       setPName(response[0]);
//       setData1(response[1]);
//       setData2(response[2]);
//       setData3(response[3]);
//       setData4(response[4]);
//       setData5(response[5]);
//       setData6(response[6]);
//       setData7(response[7]);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     setPersonalDetails({
//       ...personalDetails,
//       name: data1.name,
//       email: data1.email,
//       phoneNumber: data1.phoneNumber,
//       image: data1.image,
//     });
//   }, [data1]);

//   useEffect(() => {
//     if (data2) {
//       setAddress({
//         ...address,
//         streetAddress: data2.streetAddress,
//         city: data2.city,
//         state: data2.state,
//         zipCode: data2.zipCode,
//         country: data2.country,
//       });
//     }
//   }, [data2]);

//   useEffect(() => {
//     if (Array.isArray(data3)) {
//       setEducation(data3);
//     }
//   }, [data3]);

//   useEffect(() => {
//     if (Array.isArray(data4)) {
//       setAchievements(data4);
//     }
//   }, [data4]);

//   useEffect(() => {
//     if (Array.isArray(data5)) {
//       setExperience(data5);
//     }
//   }, [data5]);

//   useEffect(() => {
//     if (Array.isArray(data6)) {
//       setProjects(data6);
//     }
//   }, [data6]);

//   useEffect(() => {
//     if (Array.isArray(data7)) {
//       setSkills(data7);
//     }
//   }, [data7]);

//   const handleDownload = () => {
//     const doc = new jsPDF();

//     if (personalDetails.name) {
//       doc.text(personalDetails.name, 20, 20);
//     }
//     if (personalDetails.email && personalDetails.phone) {
//       doc.text(personalDetails.email + ' | ' + personalDetails.phoneNumber, 20, 30);
//     }
//     if (address) {
//       doc.text(
//         `${address.streetAddress}, ${address.city}, ${address.state}, ${address.country} - ${address.zipCode}`,
//         20,
//         40
//       );
//     }

//     doc.setFontSize(16);
//     if (education.length > 0) {
//       doc.text('Education', 20, 60);
//       doc.setFontSize(12);
//       education.forEach((edu, index) => {
//         doc.text(
//           `${edu.name}, ${edu.institute}, ${edu.degree}, ${edu.percentage}, ${edu.passingYear}`,
//           20,
//           70 + index * 10
//         );
//       });
//     }

//     if (skills.length > 0) {
//       doc.setFontSize(16);
//       doc.text('Skills', 20, 100);
//       doc.setFontSize(12);
//       skills.forEach((skill, index) => {
//         doc.text(skill.name, 20, 110 + index * 10);
//       });
//     }

//     if (projects.length > 0) {
//       doc.setFontSize(16);
//       doc.text('Projects', 20, 140);
//       doc.setFontSize(12);
//       projects.forEach((project, index) => {
//         doc.text(
//           `${project.project}, ${project.duration}, ${project.description}`,
//           20,
//           150 + index * 10
//         );
//       });
//     }

//     if (achievements.length > 0) {
//       doc.setFontSize(16);
//       doc.text('Achievements', 20, 180);
//       doc.setFontSize(12);
//       achievements.forEach((achievement, index) => {
//         doc.text(
//           `${achievement.title}, ${achievement.dateAchieved}, ${achievement.description}`,
//           20,
//           190 + index * 10
//         );
//       });
//     }

//     if (workExperience.length > 0) {
//       doc.setFontSize(16);
//       doc.text('Work Experience', 20, 220);
//       doc.setFontSize(12);
//       workExperience.forEach((experience, index) => {
//         doc.text(
//           `${experience.company}, ${experience.timeperiod}, ${experience.description}`,
//           20,
//           230 + index * 10
//         );
//       });
//     }

//     doc.save(`${pName}.pdf`);
//   };

//   return (
//     <div className="resume">
//       <button onClick={handleDownload}>Download Resume</button>

//       <h1>Resume</h1>

//       {personalDetails && (
//         <div>
//           <h2>Personal Details</h2>
//           <p>Name: {personalDetails.name}</p>
//           <p>Email: {personalDetails.email}</p>
//           <p>Phone: {personalDetails.phoneNumber}</p>
//         </div>
//       )}

//       {address && (
//         <div>
//           <h2>Address</h2>
//           <p>{address.streetAddress}</p>
//           <p>{address.city}</p>
//           <p>{address.state}</p>
//           <p>
//             {address.country} - {address.zipCode}
//           </p>
//         </div>
//       )}

//       {education.length > 0 && (
//         <div>
//           <h2>Education</h2>
//           <ul>
//             {education.map((edu, index) => (
//               <li key={index}>
//                 {edu.name}, {edu.institute}, {edu.degree}, {edu.percentage},
//                 {edu.passingYear}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {achievements.length > 0 && (
//         <div>
//           <h2>Achievements</h2>
//           <ul>
//             {achievements.map((achievement, index) => (
//               <li key={index}>
//                 {achievement.title}, {achievement.dateAchieved},{' '}
//                 {achievement.description}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {workExperience.length > 0 && (
//         <div>
//           <h2>Work Experience</h2>
//           <ul>
//             {workExperience.map((experience, index) => (
//               <li key={index}>
//                 {experience.company}, {experience.timeperiod},
//                 {experience.description}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {projects.length > 0 && (
//         <div>
//           <h2>Projects</h2>
//           <ul>
//             {projects.map((project, index) => (
//               <li key={index}>
//                 {project.project}, {project.duration}, {project.completionDate}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {skills.length > 0 && (
//         <div>
//           <h2>Skills</h2>
//           {skills.map((item, index) => (
//             <p key={index}>{item.name}</p>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Resume;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/resumepage.css';
import jsPDF from 'jspdf';
import { getResumeRoute } from '../utils/frontendRoutes';

function Resume() {
  const [isDataLoaded, setDataLoaded] = useState(false);
  const [pName, setPName] = useState(null);
  const [personalDetails, setPersonalDetails] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    image: '',
  });
  const [address, setAddress] = useState({
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });
  const [education, setEducation] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [workExperience, setExperience] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  const [data1, setData1] = useState({});
  const [data2, setData2] = useState({});
  const [data3, setData3] = useState({});
  const [data4, setData4] = useState({});
  const [data5, setData5] = useState({});
  const [data6, setData6] = useState({});
  const [data7, setData7] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const rspns = await axios.get(getResumeRoute);
      const response = rspns.data;
      setPName(response[0]);
      setData1(response[1]);
      setData2(response[2]);
      setData3(response[3]);
      setData4(response[4]);
      setData5(response[5]);
      setData6(response[6]);
      setData7(response[7]);
      setDataLoaded(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setPersonalDetails({
      ...personalDetails,
      name: data1.name,
      email: data1.email,
      phoneNumber: data1.phoneNumber,
      image: data1.image,
    });
  }, [data1]);

  useEffect(() => {
    if (data2) {
      setAddress({
        ...address,
        streetAddress: data2.streetAddress,
        city: data2.city,
        state: data2.state,
        zipCode: data2.zipCode,
        country: data2.country,
      });
    }
  }, [data2]);

  useEffect(() => {
    if (Array.isArray(data3)) {
      setEducation(data3);
    }
  }, [data3]);

  useEffect(() => {
    if (Array.isArray(data4)) {
      setAchievements(data4);
    }
  }, [data4]);

  useEffect(() => {
    if (Array.isArray(data5)) {
      setExperience(data5);
    }
  }, [data5]);

  useEffect(() => {
    if (Array.isArray(data6)) {
      setProjects(data6);
    }
  }, [data6]);

  useEffect(() => {
    if (Array.isArray(data7)) {
      setSkills(data7);
    }
  }, [data7]);

  const handleDownload = () => {
    if (!isDataLoaded) {
      // Data is not loaded yet, don't proceed with PDF generation
      return;
    } else {
      try {
        const doc = new jsPDF();

        doc.setFontSize(18);
        doc.text('title lmao', 20, 20);

        doc.setFontSize(12);

        if (personalDetails.name) {
          doc.text(personalDetails.name, 20, 40);
        }

        if (personalDetails.email && personalDetails.phoneNumber) {
          doc.text(
            personalDetails.email + ' | ' + personalDetails.phoneNumber,
            20,
            50
          );
        }

        if (
          address.streetAddress ||
          address.city ||
          address.state ||
          address.country ||
          address.zipCode
        ) {
          const addressLines = [];
          if (address.streetAddress) addressLines.push(address.streetAddress);
          if (address.city) addressLines.push(address.city);
          if (address.state) addressLines.push(address.state);
          if (address.country) addressLines.push(address.country);
          if (address.zipCode) addressLines.push(address.zipCode);
          doc.text(addressLines.join(', '), 20, 60);
        }

        if (education.length > 0) {
          doc.setFontSize(16);
          doc.text('Education', 20, 80);
          doc.setFontSize(12);
          education.forEach((edu, index) => {
            console.log(edu.duration);
            doc.text(`${edu.duration} - ${edu.name}`, 20, 90 + index * 20);
            doc.text(edu.institute, 30, 100 + index * 20);
            doc.text(edu.degree, 30, 110 + index * 20);
            doc.text(edu.percentage, 30, 120 + index * 20);
            doc.text(edu.passingYear, 30, 130 + index * 20);
          });
        }

        if (skills.length > 0) {
          doc.setFontSize(16);
          doc.text('Skills', 20, 200);
          doc.setFontSize(12);
          skills.forEach((skill, index) => {
            doc.text(skill.name, 20, 210 + index * 10);
          });
        }

        if (projects.length > 0) {
          doc.setFontSize(16);
          doc.text('Projects', 20, 250);
          doc.setFontSize(12);
          projects.forEach((project, index) => {
            doc.text(
              `${project.name} ${project.duration}`,
              20,
              260 + index * 20
            );
            doc.text(project.description, 30, 270 + index * 20);
          });
        }

        if (achievements.length > 0) {
          doc.setFontSize(16);
          doc.text('Achievements', 20, 400);
          doc.setFontSize(12);
          achievements.forEach((achievement, index) => {
            doc.text(
              `${achievement.title} ${achievement.dateAchieved}`,
              20,
              410 + index * 20
            );
            doc.text(achievement.description, 30, 420 + index * 20);
          });
        }

        if (workExperience.length > 0) {
          doc.setFontSize(16);
          doc.text('Work Experience', 20, 600);
          doc.setFontSize(12);
          workExperience.forEach((experience, index) => {
            doc.text(
              `${experience.company} ${experience.timeperiod}`,
              20,
              610 + index * 20
            );
            doc.text(experience.description, 30, 620 + index * 20);
          });
        }

        doc.save(`${personalDetails.name}.pdf`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="resume">
      <h1>Resume</h1>
      <button onClick={handleDownload}>Download Resume</button>
      <hr />

      {personalDetails && (
        <div>
          <h2 className="left-align">Personal Details</h2>
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{personalDetails.name}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{personalDetails.email}</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>{personalDetails.phoneNumber}</td>
              </tr>
            </tbody>
          </table>
          <br />
        </div>
      )}

      {address && (
        <div>
          <hr />
          <h2 className="left-align">Address</h2>
          <table>
            <tbody>
              <tr>
                <td>Street Address:</td>
                <td>{address.streetAddress}</td>
              </tr>
              <tr>
                <td>City:</td>
                <td>{address.city}</td>
              </tr>
              <tr>
                <td>State:</td>
                <td>{address.state}</td>
              </tr>
              <tr>
                <td>Country:</td>
                <td>{address.country}</td>
              </tr>
              <tr>
                <td>Zip Code:</td>
                <td>{address.zipCode}</td>
              </tr>
            </tbody>
          </table>
          <br />
        </div>
      )}

      {education.length > 0 && (
        <div>
          <hr />
          <h2 className="left-align">Education</h2>
          <table>
            <tbody>
              {education.map((edu, index) => (
                <tr key={index}>
                  <td>{edu.name}</td>
                  <td>{edu.institute}</td>
                  <td>{edu.degree}</td>
                  <td>{edu.percentage}</td>
                  <td>{edu.passingYear}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
        </div>
      )}

      {achievements.length > 0 && (
        <div>
          <hr />
          <h2 className="left-align">Achievements</h2>
          <table>
            <tbody>
              {achievements.map((achievement, index) => (
                <tr key={index}>
                  <td>{achievement.title}</td>
                  <td>{achievement.dateAchieved}</td>
                  <td>{achievement.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
        </div>
      )}

      {workExperience.length > 0 && (
        <div>
          <hr />
          <h2 className="left-align">Work Experience</h2>
          <table>
            <tbody>
              {workExperience.map((experience, index) => (
                <tr key={index}>
                  <td>{experience.company}</td>
                  <td>{experience.timeperiod}</td>
                  <td>{experience.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
        </div>
      )}

      {projects.length > 0 && (
        <div>
          <hr />
          <h2 className="left-align">Projects</h2>
          <table>
            <tbody>
              {projects.map((project, index) => (
                <tr key={index}>
                  <td>{project.project}</td>
                  <td>{project.duration}</td>
                  <td>{project.completionDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
        </div>
      )}

      {skills.length > 0 && (
        <div>
          <hr />
          <h2 className="left-align">Skills</h2>
          <table>
            <tbody>
              {skills.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Resume;
