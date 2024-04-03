import React, { useEffect, useState } from "react";
import Card from "antd/es/card/Card";
import { API_BASE_URL } from "../../apiConfig";
import { useParams } from "react-router-dom";
import "./application.css";
import { Button } from "antd";
import Rator from "./Rator";
import { useNavigate } from "react-router-dom";

const ApplicationDetails = () => {
  const [application, setApplication] = useState({});
  const params = useParams();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [applicationData, setApplicationData] = useState({});
  const navigate = useNavigate();

  const getApplication = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/escalelabs/applications/${params.id}`
      );
      const data = await response.json();
      setApplication(data);
      console.log(data);
    } catch (error) {
      console.log("An error occured while fetching applicat details");
    }
  };

  const userRole = localStorage.getItem("role");

  const loggedInUser = localStorage.getItem("userId");
  const [formData, setFormData] = useState({
    user: loggedInUser,
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

  const getApplicationData = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/escalelabs/applications/${params.id}`
      );
      const data = await response.json();
      console.log(data);
      setFormData(data);
    } catch (error) {
      console.log("an error ocuured while updating data", error);
    }
  };

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
        `${API_BASE_URL}/escalelabs/update_application/${params.id}/`,
        {
          method: "PUT",
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

  useEffect(() => {
    getApplication();
    getApplicationData();
  }, [params.id]);

  return (
    <div className=" container ">
      <Card
        title="Applicant Details"
        bordered={false}
        style={{
          width: "100%",
        }}
      >
        <div className="applicant_details">
          <div>
            <p>
              <strong>Full Name: </strong>
              {application.fullName}
            </p>
            <p>
              <strong>Email Address: </strong>
              {application.email}
            </p>
            <p>
              <strong>Date of Birth: </strong>
              {application.dateOfBirth}
            </p>
            <p>
              <strong>Registration Date: </strong>
              {application.registrationDate}
            </p>
            <p>
              <strong>Phone Number: </strong>
              {application.phoneNumber}
            </p>
          </div>

          <div>
            <p>
              <strong>Country: </strong>
              {application.country}
            </p>
            <p>
              <strong>Education Level: </strong>
              {application.education_level}
            </p>
            <p>
              <strong>Graduation Date: </strong>
              {application.graduationDate}
            </p>
            <p>
              <strong>Employment Status: </strong>
              {application.employmentStatus}
            </p>
            <p>
              <strong>Applicant Experience in Years: </strong>
              {application.experienceYears}
            </p>
            <p>
              <strong>Do Applicant have company: </strong>
              {application.doYouHaveCompany}
            </p>
          </div>

          <div>
            <p>
              <strong>Applicant's Business Name: </strong>
              {application.yourBusinessName}
            </p>
            <p>
              <strong>Business stage: </strong>
              {application.yourBusinessStage}
            </p>
            <p>
              <strong>Date Business was established: </strong>
              {application.DateOfYourBusinessEstablishment}
            </p>
            <p>
              <strong>Number of Business Founders: </strong>
              {application.totalFoundersInYourBusiness}
            </p>
            <p>
              <strong>Gender: </strong>
              {application.gender}
            </p>
          </div>
        </div>

        {/* Inovation and Disruption */}

        {userRole === "admin" && (
          <>
            <div className="panel panel-default">
              <div className="panel-heading">
                <strong className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse2"
                  >
                    Innovation and Disruption
                  </a>
                </strong>
              </div>
              <div id="collapse2" className="panel-collapse collapse">
                <div className="panel-body">
                  <div>
                    <label>
                      Write a brief description of the idea/concept/business
                    </label>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="ideaDescription"
                      value={formData.ideaDescription}
                      onChange={handleChange}
                      readOnly
                    />
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <ul>
                      <li>
                        Poor (1-4): Idea shows little to no originality or
                        differentiation.
                      </li>
                      <li>
                        Fair (5-8): Idea has some original elements but lacks a
                        unique value proposition
                      </li>
                      <li>
                        Excellent (9-10): Idea is highly original, unique, and
                        presents a novel approach to the market
                      </li>
                    </ul>
                    <strong>Rate</strong>
                    <input type="number" className="input__style__rating" />
                  </div>

                  <div>
                    <label>
                      Which Problem/Need In The Market Are You Solving/Have You
                      Identified?
                    </label>
                    <input
                      className="input__style"
                      type="text"
                      name="problemIdentification"
                      value={formData.problemIdentification}
                      onChange={handleChange}
                      readOnly
                    />

                    <div style={{ marginBottom: "20px" }}>
                      <ul>
                        <li>
                          Poor (1-4): Idea shows little to no originality or
                          differentiation.
                        </li>
                        <li>
                          Fair (5-8): Idea has some original elements but lacks
                          a unique value proposition
                        </li>
                        <li>
                          Excellent (9-10): Idea is highly original, unique, and
                          presents a novel approach to the market
                        </li>
                      </ul>
                      <strong>Rate</strong>
                      <input type="number" className="input__style__rating" />
                    </div>
                  </div>

                  <div>
                    <label>
                      How Are You Solving The Problem/Need In The Market?
                    </label>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="solutionApproach"
                      value={formData.solutionApproach}
                      onChange={handleChange}
                      readOnly
                    />

                    <div style={{ marginBottom: "20px" }}>
                      <ul>
                        <li>
                          Poor (1-4): Idea shows little to no originality or
                          differentiation.
                        </li>
                        <li>
                          Fair (5-8): Idea has some original elements but lacks
                          a unique value proposition
                        </li>
                        <li>
                          Excellent (9-10): Idea is highly original, unique, and
                          presents a novel approach to the market
                        </li>
                      </ul>
                      <strong>Rate</strong>
                      <input type="number" className="input__style__rating" />
                    </div>
                  </div>

                  <div>
                    <label>
                      What differentiates your offering in the market, and what
                      are your unique selling points?
                    </label>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="differentiationAndUSP"
                      value={formData.differentiationAndUSP}
                      onChange={handleChange}
                      readOnly
                    />

                    <div style={{ marginBottom: "20px" }}>
                      <ul>
                        <li>
                          Poor (1-4): Idea shows little to no originality or
                          differentiation.
                        </li>
                        <li>
                          Fair (5-8): Idea has some original elements but lacks
                          a unique value proposition
                        </li>
                        <li>
                          Excellent (9-10): Idea is highly original, unique, and
                          presents a novel approach to the market
                        </li>
                      </ul>
                      <strong>Rate</strong>
                      <input type="number" className="input__style__rating" />
                    </div>
                  </div>

                  <div>
                    <label>What Stage Is Your Prototype In?</label>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="prototypeStage"
                      value={formData.prototypeStage}
                      onChange={handleChange}
                      readOnly
                    />
                    <div style={{ marginBottom: "20px" }}>
                      <ul>
                        <li>
                          Poor (1-4): Idea shows little to no originality or
                          differentiation.
                        </li>
                        <li>
                          Fair (5-8): Idea has some original elements but lacks
                          a unique value proposition
                        </li>
                        <li>
                          Excellent (9-10): Idea is highly original, unique, and
                          presents a novel approach to the market
                        </li>
                      </ul>
                      <strong>Rate</strong>
                      <input type="number" className="input__style__rating" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <strong className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse3"
                  >
                    Scalability and Marketing
                  </a>
                </strong>
              </div>
              <div id="collapse3" className="panel-collapse collapse">
                <div className="panel-body">
                  <div>
                    <label>
                      Please define your primary customer base and detail as
                      many characteristics as possible that help to define a
                      clear picture of your target persona. Where Is Your Target
                      Market? Why Did You Choose This Market Or Target Segment?
                      What is your market size and how did you calculate it?
                      Please specify the methods and data you used to determine
                      this figure.
                    </label>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="mainBusinessWins"
                      value={formData.primaryCustomerBaseDefinition}
                      onChange={handleChange}
                      readOnly
                    />

                    <div style={{ marginBottom: "20px" }}>
                      <ul>
                        <li>
                          Poor (1-4): Idea shows little to no originality or
                          differentiation.
                        </li>
                        <li>
                          Fair (5-8): Idea has some original elements but lacks
                          a unique value proposition
                        </li>
                        <li>
                          Excellent (9-10): Idea is highly original, unique, and
                          presents a novel approach to the market
                        </li>
                      </ul>
                      <strong>Rate</strong>
                      <input type="number" className="input__style__rating" />
                    </div>
                  </div>

                  <div>
                    <label>Which Industry Will You/Do You Operate In?</label>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="industryOperateIn"
                      value={formData.industryOperateIn}
                      onChange={handleChange}
                      readOnly
                    />

                    <div style={{ marginBottom: "20px" }}>
                      <ul>
                        <li>
                          Poor (1-4): Idea shows little to no originality or
                          differentiation.
                        </li>
                        <li>
                          Fair (5-8): Idea has some original elements but lacks
                          a unique value proposition
                        </li>
                        <li>
                          Excellent (9-10): Idea is highly original, unique, and
                          presents a novel approach to the market
                        </li>
                      </ul>
                      <strong>Rate</strong>
                      <input type="number" className="input__style__rating" />
                    </div>
                  </div>

                  <div>
                    <label>
                      What Do You Expect As Key Challenges For Your Business?
                      Why do you consider the above as key challenges?
                    </label>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="keyChallengesExpectation"
                      value={formData.keyChallengesExpectation}
                      onChange={handleChange}
                      readOnly
                    />

                    <div style={{ marginBottom: "20px" }}>
                      <ul>
                        <li>
                          Poor (1-4): Idea shows little to no originality or
                          differentiation.
                        </li>
                        <li>
                          Fair (5-8): Idea has some original elements but lacks
                          a unique value proposition
                        </li>
                        <li>
                          Excellent (9-10): Idea is highly original, unique, and
                          presents a novel approach to the market
                        </li>
                      </ul>
                      <strong>Rate</strong>
                      <input type="number" className="input__style__rating" />
                    </div>
                  </div>

                  <div>
                    <label>
                      List the top three competitors in your market space and
                      briefly describe the core reason for each being a direct
                      competitor to your business.
                    </label>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="competitorsListAndReasons"
                      value={formData.competitorsListAndReasons}
                      onChange={handleChange}
                      readOnly
                    />

                    <div style={{ marginBottom: "20px" }}>
                      <ul>
                        <li>
                          Poor (1-4): Idea shows little to no originality or
                          differentiation.
                        </li>
                        <li>
                          Fair (5-8): Idea has some original elements but lacks
                          a unique value proposition
                        </li>
                        <li>
                          Excellent (9-10): Idea is highly original, unique, and
                          presents a novel approach to the market
                        </li>
                      </ul>
                      <strong>Rate</strong>
                      <input type="number" className="input__style__rating" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <strong className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse4"
                  >
                    Business Model Viability
                  </a>
                </strong>
              </div>
              <div id="collapse4" className="panel-collapse collapse">
                <div className="panel-body">
                  <div>
                    <label>
                      Please list your main business wins, like total assets,
                      customer count, and biggest sales, along with any other
                      major success metrics. Please also review and assess a
                      Business Model Canvas in the attachments
                    </label>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="mainBusinessWins"
                      value={formData.mainBusinessWins}
                      onChange={handleChange}
                      readOnly
                    />

                    <div style={{ marginBottom: "20px" }}>
                      <ul>
                        <li>
                          Poor (1-4): Idea shows little to no originality or
                          differentiation.
                        </li>
                        <li>
                          Fair (5-8): Idea has some original elements but lacks
                          a unique value proposition
                        </li>
                        <li>
                          Excellent (9-10): Idea is highly original, unique, and
                          presents a novel approach to the market
                        </li>
                      </ul>
                      <strong>Rate</strong>
                      <input type="number" className="input__style__rating" />
                    </div>
                  </div>

                  <div>
                    <label>
                      Are/ Were You Part Of Any Accelerator Or Incubator
                      Program? What is the name of the incubator or accelerator
                      you joined, and in which year did you join it?
                    </label>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="acceleratorOrIncubatorDetails"
                      value={formData.acceleratorOrIncubatorDetails}
                      onChange={handleChange}
                      readOnly
                    />

                    <div style={{ marginBottom: "20px" }}>
                      <ul>
                        <li>
                          Poor (1-4): Idea shows little to no originality or
                          differentiation.
                        </li>
                        <li>
                          Fair (5-8): Idea has some original elements but lacks
                          a unique value proposition
                        </li>
                        <li>
                          Excellent (9-10): Idea is highly original, unique, and
                          presents a novel approach to the market
                        </li>
                      </ul>
                      <strong>Rate</strong>
                      <input type="number" className="input__style__rating" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <strong className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse5"
                  >
                    Financial Projections
                  </a>
                </strong>
              </div>
              <div id="collapse5" className="panel-collapse collapse">
                <div className="panel-body">
                  <div>
                    <label>
                      Do You Currently Generate Revenues? How much did you
                      generate in revenue in the last Fiscal Year? Have you
                      generated any profits? In addition, please validate the
                      information with financial statements submitted
                    </label>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="currentRevenueGeneration"
                      value={formData.currentRevenueGeneration}
                      onChange={handleChange}
                      readOnly
                    />

                    <div style={{ marginBottom: "20px" }}>
                      <ul>
                        <li>
                          Poor (1-4): Idea shows little to no originality or
                          differentiation.
                        </li>
                        <li>
                          Fair (5-8): Idea has some original elements but lacks
                          a unique value proposition
                        </li>
                        <li>
                          Excellent (9-10): Idea is highly original, unique, and
                          presents a novel approach to the market
                        </li>
                      </ul>
                      <strong>Rate</strong>
                      <input type="number" className="input__style__rating" />
                    </div>
                  </div>

                  <div>
                    <label>
                      Have You Received/Raised Any Funding So Far? How Much
                      Funding Have You Received So Far in AED? Who Gave You
                      Funding?
                    </label>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="fundingReceivedAmountAED"
                      value={formData.fundingReceivedAmountAED}
                      onChange={handleChange}
                      readOnly
                    />

                    <div style={{ marginBottom: "20px" }}>
                      <ul>
                        <li>
                          Poor (1-4): Idea shows little to no originality or
                          differentiation.
                        </li>
                        <li>
                          Fair (5-8): Idea has some original elements but lacks
                          a unique value proposition
                        </li>
                        <li>
                          Excellent (9-10): Idea is highly original, unique, and
                          presents a novel approach to the market
                        </li>
                      </ul>
                      <strong>Rate</strong>
                      <input type="number" className="input__style__rating" />
                    </div>
                  </div>

                  <div>
                    <label>
                      Explain how you plan to use the prize money to help your
                      business if you win.
                    </label>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="prizeMoneyUsagePlan"
                      value={formData.prizeMoneyUsagePlan}
                      onChange={handleChange}
                      readOnly
                    />

                    <div style={{ marginBottom: "20px" }}>
                      <ul>
                        <li>
                          Poor (1-4): Idea shows little to no originality or
                          differentiation.
                        </li>
                        <li>
                          Fair (5-8): Idea has some original elements but lacks
                          a unique value proposition
                        </li>
                        <li>
                          Excellent (9-10): Idea is highly original, unique, and
                          presents a novel approach to the market
                        </li>
                      </ul>
                      <strong>Rate</strong>
                      <input type="number" className="input__style__rating" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <strong className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse6"
                  >
                    Team Competence
                  </a>
                </strong>
              </div>
              <div id="collapse6" className="panel-collapse collapse">
                <div className="panel-body">
                  <div>
                    <label>Emiratization rate of founding team members</label>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="emiratizationRateOfFoundingTeam"
                      value={formData.emiratizationRateOfFoundingTeam}
                      onChange={handleChange}
                      readOnly
                    />

                    <div style={{ marginBottom: "20px" }}>
                      <ul>
                        <li>
                          Poor (1-4): Idea shows little to no originality or
                          differentiation.
                        </li>
                        <li>
                          Fair (5-8): Idea has some original elements but lacks
                          a unique value proposition
                        </li>
                        <li>
                          Excellent (9-10): Idea is highly original, unique, and
                          presents a novel approach to the market
                        </li>
                      </ul>
                      <strong>Rate</strong>
                      <input type="number" className="input__style__rating" />
                    </div>
                  </div>

                  <div>
                    <label>
                      Review of the CVs of founders and leadership team: are
                      team members' experience relevant?
                    </label>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="foundersAndLeadershipExperienceReview"
                      value={formData.foundersAndLeadershipExperienceReview}
                      onChange={handleChange}
                      readOnly
                    />

                    <div style={{ marginBottom: "20px" }}>
                      <ul>
                        <li>
                          Poor (1-4): Idea shows little to no originality or
                          differentiation.
                        </li>
                        <li>
                          Fair (5-8): Idea has some original elements but lacks
                          a unique value proposition
                        </li>
                        <li>
                          Excellent (9-10): Idea is highly original, unique, and
                          presents a novel approach to the market
                        </li>
                      </ul>
                      <strong>Rate</strong>
                      <input type="number" className="input__style__rating" />
                    </div>
                  </div>

                  <div>
                    <label>
                      Do You Have Any Mentor/Advisor Supporting Your Business?
                      Who is your mentor? Who is your mentor? What is his/her
                      occupation? And how did you get to know him/her?
                    </label>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="mentorSupportingBusiness"
                      value={formData.mentorSupportingBusiness}
                      onChange={handleChange}
                      readOnly
                    />

                    <div style={{ marginBottom: "20px" }}>
                      <ul>
                        <li>
                          Poor (1-4): Idea shows little to no originality or
                          differentiation.
                        </li>
                        <li>
                          Fair (5-8): Idea has some original elements but lacks
                          a unique value proposition
                        </li>
                        <li>
                          Excellent (9-10): Idea is highly original, unique, and
                          presents a novel approach to the market
                        </li>
                      </ul>
                      <strong>Rate</strong>
                      <input type="number" className="input__style__rating" />
                    </div>
                  </div>

                  <div>
                    <label>
                      Where Is The Location Of Your Business Operations?
                    </label>
                    <textarea
                      cols={10}
                      rows={3}
                      className="input__style"
                      type="text"
                      name="businessOperationsLocation"
                      value={formData.businessOperationsLocation}
                      onChange={handleChange}
                      readOnly
                    />

                    <div style={{ marginBottom: "20px" }}>
                      <ul>
                        <li>
                          Poor (1-4): Idea shows little to no originality or
                          differentiation.
                        </li>
                        <li>
                          Fair (5-8): Idea has some original elements but lacks
                          a unique value proposition
                        </li>
                        <li>
                          Excellent (9-10): Idea is highly original, unique, and
                          presents a novel approach to the market
                        </li>
                      </ul>
                      <strong>Rate</strong>
                      <input type="number" className="input__style__rating" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Innovation and Disruption */}
        <div class="panel-group" id="accordion">
          <div class="panel panel-default">
            <div id="collapse1" class="panel-collapse collapse in"></div>
          </div>
          <div class="panel panel-default">
            <div id="collapse2" class="panel-collapse collapse"></div>
          </div>
          <div class="panel panel-default"></div>
        </div>
        <Button type="primary" href={`/main/applications`}>
          Submit
        </Button>
      </Card>
    </div>
  );
};

export default ApplicationDetails;
