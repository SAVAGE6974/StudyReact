import axios from "axios";

const handleRegister = async () => {
  try {
    const response = await axios.post("http://localhost:5000/register", {
      username,
      password
    });

    console.log(response.data); // 여기서 .data 사용 가능!
    alert(response.data.message);
  } catch (error) {
    // 에러 응답이 있는 경우
    if (error.response && error.response.data) {
      alert(error.response.data.message);
    } else {
      console.error(error);
      alert("알 수 없는 오류 발생");
    }
  }
};
