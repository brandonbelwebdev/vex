// /netlify/functions/jooble.js
exports.handler = async function (event, context) {
  const JOOBLE_API_KEY = "efc7387f-629e-489b-8497-ef3759643ad2";

  try {
    const response = await fetch(`https://jooble.org/api/${JOOBLE_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: event.body,
    });

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Error fetching data from Jooble API:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};

