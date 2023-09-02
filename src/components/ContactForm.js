import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import TextField from "./TextField";
import "./ContactForm.css";
const ContactForm = () => {
  const [data, setData] = useState({name: "",email:"",message:""});
  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setData({...data,[name]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (dataIsSufficient(data)) {
      // Here, you can send the form data to a server or perform any other actions.
      console.log(data);
    } else {
      alert("Data is insufficient");
    }
  };

  function dataIsSufficient(data) {
    return data.name.trim() !== "" && data.email.trim() !== "" && data.message.trim() !== "";
  }

  return (
    <div className="frame23">
      <div className="frame24">
        <footer className="rectangle-footer" />
        <img className="icon" alt="" src="/18591063@2x.png" />
        <div className="copyright-2022-all">
          Copyright 2022 All Right Reserved By SG
        </div>
        <div className="get-news-about-container">
          <p className="blank-line">&nbsp;</p>
          <p className="blank-line">
            Get news about articles and updates in your inbox.
          </p>
        </div>
        <div className="newslleter">Newslleter</div>
       <form method="post" onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" onChange={handleChange} value={data.name} placeholder="NAME"/>
        <input type="email" name="email" id="email" onChange={handleChange} value={data.email} placeholder="EMAIL"/>
        <textarea  name="message" id="msg" onChange={handleChange} value={data.message} cols="30" rows="10" placeholder="MESSAGE"/>
        <div className="button">
         <a href="" ><button type="submit" id="submit"> SEND</button></a>
          </div>
        
      
       </form>
       
        <div className="lorem-ipsum-dolor-container">
          <p className="blank-line">{`GET `}</p>
          <p className="blank-line">IN TOUCH</p>
        </div>
        <div className="frame-child3" />
        <div className="frame-child4" />
        <div className="frame-child5" />
        
      </div>
      <div className="frame25">
        <div className="frame26">
          <TextField
            textFieldPosition="absolute"
            textFieldTop="0px"
            textFieldLeft="0px"
          />
          <TextField
            textFieldPosition="absolute"
            textFieldTop="0px"
            textFieldLeft="336px"
          />
          <TextField
            textFieldPosition="absolute"
            textFieldTop="0px"
            textFieldLeft="666px"
          />
          <TextField
            textFieldPosition="absolute"
            textFieldTop="0px"
            textFieldLeft="997px"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
