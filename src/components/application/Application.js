import React, { useState, useEffect } from "react";
import "./application.css";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../apiConfig";
import Card from "antd/es/card/Card";
import { Rate } from "antd";
import Rator from "./Rator";
import MultiStepForm from "./Form";


const ApplicationForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const loggedInUser = localStorage.getItem("userId");

  const [formData, setFormData] = useState({
    user: loggedInUser,
    email: "",
    fullName: "",
    registrationDate: "",
    dateOfBirth: "",
    phoneNumber: "",
    gender: "",
    country: "",
    education_level: "",
    graduationDate: "",
    employmentStatus: "",
    experienceYears: "",
    doYouHaveCompany: "",
    yourBusinessName: "",
    yourBusinessStage: "",
    DateOfYourBusinessEstablishment: "",
    totalFoundersInYourBusiness: "",
    whatBestSuitsYou: "",

    ideaDescription: "",
    problemIdentification: "",
    solutionApproach: "",
    differentiationAndUSP: "",
    prototypeStage: "",

    primaryCustomerBaseDefinition: "",
    industryOperateIn: "",
    keyChallengesExpectation: "",
    competitorsListAndReasons: "",

    mainBusinessWins: "",
    acceleratorOrIncubatorDetails: "",

    currentRevenueGeneration: "",
    fundingReceivedAmountAED: "",
    prizeMoneyUsagePlan: "",

    emiratizationRateOfFoundingTeam: "",
    foundersAndLeadershipExperienceReview: "",
    mentorSupportingBusiness: "",
    businessOperationsLocation: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const [isLoading, setIsLaoding] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLaoding(false)
    }, 3000)
  })





  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${API_BASE_URL}/escalelabs/create_application/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setLoading(true);
        setTimeout(() => {
          navigate("/main/applications");
        }, 5000);
        setMessage("Application successful");
      } else {
        setMessage("Error: Username already exists or passwords do not match");
      }
    } catch (error) {
      setMessage("An error occurred while sending application");
    }
  };

  setTimeout(() => {
    setMessage("");
  }, 3000);

  return (


    <div>
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Dashboard</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="/main/dashboard">Home</a></li>
                <li className="breadcrumb-item active">Dashboard v1</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
        <section className="content">
        <div className="container-fluid">
          <div className="row">
            
    <div className="application">
      <div className="application__container">
        <Card
          title="Application Form"
          bordered={false}
          style={{
            width: "100%",
          }}
        >


         <MultiStepForm />
    
        </Card>
      </div>
    </div>
          </div>
        </div>
      </section>
    </div>
  </div>



  );
};

export default ApplicationForm;
