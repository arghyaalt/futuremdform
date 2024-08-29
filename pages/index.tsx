import React, { useState } from "react";

const FutureMDForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    birthdate: "",
    termsAccepted: false,
    wantsShawarma: false,
    heardAboutUs: "",
    referredBy: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message); // Handle the response as needed
        alert("Form submitted successfully!");
      } else {
        console.error("Failed to submit the form");
        alert("There was an error submitting the form.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("There was an error submitting the form.");
    }
  };

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
        style={{
          backgroundColor: "#000000",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />

      {/* Title text */}
      <div
        style={{
          width: 843,
          height: 155,
          textAlign: "center",
          color: "#FFFFFF",
          fontSize: 80,
          fontWeight: "700",
          position: "absolute",
          top: "20px",
          zIndex: 2,
        }}
      >
        Path2Med
      </div>

      {/* Sub-text */}
      <p
        style={{
          textAlign: "center",
          width: 377,
          height: 46,
          color: "#FFFFFF",
          fontWeight: "600",
          position: "absolute",
          top: "75px",
          zIndex: 2,
          fontSize: 32,
        }}
      >
        Event Registration
      </p>

      {/* Form */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          zIndex: 3,
          marginTop: "80px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "800px",
            width: "100%",
            padding: "40px",
            background: "#000000",
            borderRadius: "8px",
            boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.2)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "35px",
            rowGap: "30px",
            transition: "box-shadow 0.3s ease-in-out",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow =
              "0px 10px 30px rgba(255, 255, 255, 0.3)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.boxShadow =
              "0px 4px 15px rgba(255, 255, 255, 0.2)")
          }
        >
          <label
            style={{
              display: "block",
              fontSize: "24px",
              color: "#FFFFFF",
              fontWeight: "600",
            }}
          >
            Full Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "13px",
                marginTop: "4px",
                fontSize: "16px",
                backgroundColor: "#1F1F1F",
                color: "#FFFFFF",
                border: "2px solid #374151",
                borderRadius: "4px",
              }}
            />
          </label>

          <label
            style={{
              display: "block",
              fontSize: "24px",
              color: "#FFFFFF",
              fontWeight: "600",
            }}
          >
            Birthdate:
            <input
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "4px",
                fontSize: "16px",
                backgroundColor: "#1F1F1F",
                color: "#FFFFFF",
                border: "2px solid #374151",
                borderRadius: "4px",
              }}
            />
          </label>

          <label
            style={{
              display: "block",
              fontSize: "24px",
              color: "#FFFFFF",
              fontWeight: "600",
            }}
          >
            Do you agree to our Terms & Conditions?:
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
              style={{ marginLeft: "8px", accentColor: "#3B82F6" }}
            />
          </label>

          <label
            style={{
              display: "block",
              fontSize: "24px",
              color: "#FFFFFF",
              fontWeight: "600",
            }}
          >
            Would you like complementary shawarma?
            <input
              type="checkbox"
              name="wantsShawarma"
              checked={formData.wantsShawarma}
              onChange={handleChange}
              style={{ marginLeft: "8px", accentColor: "#3B82F6" }}
            />
          </label>

          <label
            style={{
              display: "block",
              fontSize: "24px",
              color: "#FFFFFF",
              gridColumn: "span 2",
              fontWeight: "600",
            }}
          >
            How did you hear about us?
            <select
              name="heardAboutUs"
              value={formData.heardAboutUs}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "4px",
                fontSize: "16px",
                backgroundColor: "#1F1F1F",
                color: "#FFFFFF",
                border: "2px solid #374151",
                borderRadius: "4px",
                fontWeight: "600",
              }}
            >
              <option value="">Select an option</option>
              <option value="socialMedia">Social Media</option>
              <option value="friendsFamily">Friends and Family</option>
              <option value="teamMember">A team member</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label
            style={{
              display: "block",
              fontSize: "24px",
              color: "#FFFFFF",
              gridColumn: "span 2",
              fontWeight: "600",
            }}
          >
            Referred by (if applicable, otherwise leave blank)
            <input
              type="text"
              name="referredBy"
              value={formData.referredBy}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "4px",
                fontSize: "16px",
                backgroundColor: "#1F1F1F",
                color: "#FFFFFF",
                border: "2px solid #374151",
                borderRadius: "4px",
              }}
            />
          </label>

          <button
            type="submit"
            style={{
              gridColumn: "span 2",
              padding: "15px 20px",
              fontSize: "24px",
              fontWeight: "500",
              color: "#FFFFFF",
              backgroundColor: "#3B82F6",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "20px",
              fontFamily: "'Inter', 'Sans-Serif",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#1E40AF")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#3B82F6")
            }
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FutureMDForm;
