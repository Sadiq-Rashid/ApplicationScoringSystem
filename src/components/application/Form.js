import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../apiConfig';
const MultiStepForm = () => {
  const [step, setStep] = useState(1);
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
      <ul className="nav nav-tabs">
        <li  className={step === 1 ? 'btn btn-secondary mr-2 my-2' : ' btn btn-primary mr-2 my-2'}><a style={{color: 'white'}} href="#" onClick={() => setStep(1)}>Bio Data</a></li>
        <li  className={step === 2 ? 'btn btn-secondary mr-2 my-2' : ' btn btn-primary mr-2 my-2'}><a style={{color: 'white'}} href="#" onClick={() => setStep(2)}>Innovation and Disruption </a></li>
        <li  className={step === 3 ? 'btn btn-secondary mr-2 my-2' : ' btn btn-primary mr-2 my-2'}><a style={{color: 'white'}} href="#" onClick={() => setStep(3)}>Scalability and Marketing</a></li>
        <li  className={step === 4 ? 'btn btn-secondary mr-2 my-2' : ' btn btn-primary mr-2 my-2'}><a style={{color: 'white'}} href="#" onClick={() => setStep(4)}>Business Model Viability</a></li>
        <li  className={step === 5 ? 'btn btn-secondary mr-2 my-2' : ' btn btn-primary mr-2 my-2'}><a style={{color: 'white'}} href="#" onClick={() => setStep(5)}>Financial Projections</a></li>
        <li  className={step === 6 ? 'btn btn-secondary mr-2 my-2' : ' btn btn-primary mr-2 my-2'}><a style={{color: 'white'}} href="#" onClick={() => setStep(6)}>Team Competence</a></li>
      </ul>

      <div className="tab-content">
      <form onSubmit={handleSubmit} className="application__fields ">
        {step === 1 && (
          
          <div>
            <h5>Bio Data</h5>
            <div className='applicant_details'> 
            <div style={{ width: "100%", display: "none" }}>
                      {" "}
                      {/* Hiding the user input field */}
                      <p>User</p>
                      <input
                        placeholder="user"
                        className="input__style"
                        type="text"
                        name="user"
                        value={formData.user}
                        onChange={handleChange}
                      />
                    </div>

                    <div style={{ width: "100%" }}>
                      <p>Email address</p>
                      <input
                        placeholder="Email"
                        className="input__style"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <p>Enter Your Full Name</p>
                      <input
                        placeholder="Full Name"
                        className="input__style"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <p>Registration Date</p>
                      <input
                        placeholder="Registration Date"
                        className="input__style"
                        type="date"
                        name="registrationDate"
                        value={formData.registrationDate}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <p>Enter Date of Birth</p>
                      <input
                        placeholder="Date of Birth"
                        className="input__style"
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <p>Phone Number</p>
                      <input
                        placeholder="Phone Number"
                        className="input__style"
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <p>Gender</p>
                      <select
                        className="input__style"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select Gender
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <p>Enter country</p>

                      <input
                        placeholder="Country"
                        className="input__style"
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <p>Enter your education level</p>
                      <select
                        className="input__style"
                        name="education_level"
                        value={formData.education_level}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select Education Level
                        </option>
                        <option value="Primary level">Primary level</option>
                        <option value="Secondary level">Secondary level</option>
                        <option value="Tartiary level">Tartiary level</option>
                      </select>
                    </div>

                    <div>
                      <p>Graduation Date</p>

                      <input
                        placeholder="Graduation Date"
                        className="input__style"
                        type="date"
                        name="graduationDate"
                        value={formData.graduationDate}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <p>Employment status</p>

                      <select
                        className="input__style"
                        name="employmentStatus"
                        value={formData.employmentStatus}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select Employment Status
                        </option>
                        <option value="Employed">Employed</option>
                        <option value="Unemployed">Unemployed</option>
                        <option value="Self-employed">Self-employed</option>
                      </select>
                    </div>

                    <div>
                      <p>Years of Experience</p>

                      <input
                        placeholder="Experience Years"
                        className="input__style"
                        type="number"
                        name="experienceYears"
                        value={formData.experienceYears}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <p>Do you have a company?</p>
                      <select
                        className="input__style"
                        type="text"
                        name="doYouHaveCompany"
                        value={formData.doYouHaveCompany}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Do you have a company ?
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>

                    <div>
                      <p>Your business Name</p>

                      <input
                        placeholder="Your Business Name"
                        className="input__style"
                        type="text"
                        name="yourBusinessName"
                        value={formData.yourBusinessName}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <p>which stage is your busuness ? </p>
                      <select
                        className="input__style"
                        name="yourBusinessStage"
                        value={formData.yourBusinessStage}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select Business Stage
                        </option>
                        <option value="Start up">Start up</option>
                        <option value="Growth">Growth</option>
                        <option value="Marturity">Marturity</option>
                        <option value="Renewal">Renewal</option>
                        <option value="Decline">Decline</option>
                      </select>
                    </div>

                    <div>
                      <p>Date your business was established</p>

                      <input
                        placeholder="Date of Your Business Establishment"
                        className="input__style"
                        type="date"
                        name="DateOfYourBusinessEstablishment"
                        value={formData.DateOfYourBusinessEstablishment}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <p>Total Founders in Your Business</p>
                      <input
                        placeholder="Total Founders in Your Business"
                        className="input__style"
                        type="number"
                        name="totalFoundersInYourBusiness"
                        value={formData.totalFoundersInYourBusiness}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <p>Select what best suits you ? </p>
                      <select
                        className="input__style"
                        name="whatBestSuitsYou"
                        value={formData.whatBestSuitsYou}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select what suits you
                        </option>
                        <option value="start up">Start up</option>
                        <option value="employer">employer</option>
                        <option value="company founder">company founder</option>
                        <option value="other">other</option>
                      </select>
                    </div>
            
          </div>
          <button className=' btn btn-primary' onClick={() => setStep(2)}>Next</button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h6>Innovation and Disruption</h6>
            <div>
                    <p>
                      Write a brief description of the idea/concept/business
                    </p>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="ideaDescription"
                      value={formData.ideaDescription}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <p>
                      Which Problem/Need In The Market Are You Solving/Have You
                      Identified?
                    </p>
                    <input
                      className="input__style"
                      type="text"
                      name="problemIdentification"
                      value={formData.problemIdentification}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <p>
                      How Are You Solving The Problem/Need In The Market?
                    </p>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="solutionApproach"
                      value={formData.solutionApproach}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <p>
                      What differentiates your offering in the market, and what
                      are your unique selling points?
                    </p>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="differentiationAndUSP"
                      value={formData.differentiationAndUSP}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <p>What Stage Is Your Prototype In?</p>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="prototypeStage"
                      value={formData.prototypeStage}
                      onChange={handleChange}
                    />
                  </div>
            <button className=' btn btn-primary' onClick={() => setStep(3)}>Next</button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h6>Scalability and Marketing</h6>
            <div>
                    <p>
                      Please define your primary customer base and detail as
                      many characteristics as possible that help to define a
                      clear picture of your target persona. Where Is Your Target
                      Market? Why Did You Choose This Market Or Target Segment?
                      What is your market size and how did you calculate it?
                      Please specify the methods and data you used to determine
                      this figure.
                    </p>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="primaryCustomerBaseDefinition"
                      value={formData.primaryCustomerBaseDefinition}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <p>Which Industry Will You/Do You Operate In?</p>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="industryOperateIn"
                      value={formData.industryOperateIn}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <p>
                      What Do You Expect As Key Challenges For Your Business?
                      Why do you consider the above as key challenges?
                    </p>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="keyChallengesExpectation"
                      value={formData.keyChallengesExpectation}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <p>
                      List the top three competitors in your market space and
                      briefly describe the core reason for each being a direct
                      competitor to your business.
                    </p>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="competitorsListAndReasons"
                      value={formData.competitorsListAndReasons}
                      onChange={handleChange}
                    />
                  </div>
            <button className=' btn btn-primary' onClick={() => setStep(4)}>Next</button>
          </div>
        )}

        {step === 4 && (
          <div>
            <h6>Business Model Viability</h6>
            <div>
                    <p>
                      Please list your main business wins, like total assets,
                      customer count, and biggest sales, along with any other
                      major success metrics. Please also review and assess a
                      Business Model Canvas in the attachments
                    </p>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="mainBusinessWins"
                      value={formData.mainBusinessWins}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <p>
                      Are/ Were You Part Of Any Accelerator Or Incubator
                      Program? What is the name of the incubator or accelerator
                      you joined, and in which year did you join it?
                    </p>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="acceleratorOrIncubatorDetails"
                      value={formData.acceleratorOrIncubatorDetails}
                      onChange={handleChange}
                    />
                  </div>
                  <button className=' btn btn-primary' onClick={() => setStep(5)}>Next</button>
          </div>
        )}


{step === 5 && (
          <div>
            <h6>Financial Projections</h6>
            <div>
                    <p>
                      Do You Currently Generate Revenues? How much did you
                      generate in revenue in the last Fiscal Year? Have you
                      generated any profits? In addition, please validate the
                      information with financial statements submitted
                    </p>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="currentRevenueGeneration"
                      value={formData.currentRevenueGeneration}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <p>
                      Have You Received/Raised Any Funding So Far? How Much
                      Funding Have You Received So Far in AED? Who Gave You
                      Funding?
                    </p>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="fundingReceivedAmountAED"
                      value={formData.fundingReceivedAmountAED}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <p>
                      Explain how you plan to use the prize money to help your
                      business if you win.
                    </p>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="prizeMoneyUsagePlan"
                      value={formData.prizeMoneyUsagePlan}
                      onChange={handleChange}
                    />
                  </div>
            <button className=' btn btn-primary' onClick={() => setStep(6)}>Next</button>
          </div>
        )}

{step === 6 && (
          <div>
            <h6>Team Competence</h6>
            <div>
                    <p>Emiratization rate of founding team members</p>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="emiratizationRateOfFoundingTeam"
                      value={formData.emiratizationRateOfFoundingTeam}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <p>
                      Review of the CVs of founders and leadership team: are
                      team members' experience relevant?
                    </p>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="foundersAndLeadershipExperienceReview"
                      value={formData.foundersAndLeadershipExperienceReview}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <p>
                      Do You Have Any Mentor/Advisor Supporting Your Business?
                      Who is your mentor? Who is your mentor? What is his/her
                      occupation? And how did you get to know him/her?
                    </p>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="mentorSupportingBusiness"
                      value={formData.mentorSupportingBusiness}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <p>
                      Where Is The Location Of Your Business Operations?
                    </p>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="businessOperationsLocation"
                      value={formData.businessOperationsLocation}
                      onChange={handleChange}
                    />
                  </div>
                  {loading ? (
              <button className="buttonload button">
                <i className="fa fa-circle-o-notch fa-spin"></i> Sending
                application
              </button>
            ) : (
              <button type="submit" className="button">
                Apply
              </button>
            )}
          </div>
        )}

            </form>
      </div>
    </div>
  );
};

export default MultiStepForm;
