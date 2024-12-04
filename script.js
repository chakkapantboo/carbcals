// script.js
function calculateCarbs() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const activity = parseFloat(document.getElementById("activity").value);

    if (!weight || !height || !age || !activity) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน!");
        return;
    }

    // คำนวณ BMR
    let bmr;
    if (gender === "male") {
        bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
    } else {
        bmr = 665 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
    }

    // คำนวณ TDEE (Total Daily Energy Expenditure)
    const tdee = bmr * activity;

    // คำนวณปริมาณคาร์บ (Carbohydrate) ที่แนะนำ (20% ของ TDEE / 4 แคลอรีต่อกรัม)
    const carbs = (tdee * 0.2) / 4;

    // แสดงผลลัพธ์
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <p>ค่า BMR ของคุณ: ${bmr.toFixed(2)} แคลอรี</p>
        <p>ค่า TDEE ของคุณ: ${tdee.toFixed(2)} แคลอรี</p>
        <p>ปริมาณคาร์โบไฮเดรตที่แนะนำ: ${carbs.toFixed(2)} กรัมต่อวัน</p>
        <p>(หมายเหตุ: คาร์โบไฮเดรต 15กรัม = 1 คาร์บ = ข้าว 1 ทัพพี)</p>
    `;
}
