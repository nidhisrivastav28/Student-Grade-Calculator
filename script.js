function generateInputs() {
    const count = document.getElementById('subjno').value;
    const input = document.getElementById('subjectInputs');
    const submitbtn = document.getElementById('btn');
    input.innerHTML = '';

    for (let i = 1; i <= count; i++) {
        input.innerHTML += `
       
        <table>
            <tr> 
                <th>
                    <select class="subject-select" id="select" onchange="filterSubjects()">Select the subject
                        <option value="">Select</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Physics">Physics</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Computer">Computer</option>
                    </select>
                </th>
                <td><input type="number" name="" id="cmarks${i}" placeholder="Enter the marks" min="0" max="100" required></td>
            </tr>
        </table>
        
        `;
    }
    submitbtn.style.display = 'block';
}
//Subject Filtering
function filterSubjects(){
    const selects=document.querySelectorAll('.subject-select');
    const selectedValues=Array.from(selects).map(s=>s.value).filter(v=>v!=="");

    selects.forEach(currentSelect=>{
        const currentValue= currentSelect.value;
        const options=currentSelect.querySelectorAll('option');

        options.forEach(option=>{
            if(option.value===""){
                option.disabled=false;
            }else if(selectedValues.includes(option.value)&& option.value !== currentValue){
                option.disabled=true;
            }else{
                option.disabled=false;
            }
        });
    });
}

//Calculate the percentage
function calMarks(event) {
    // event.preventDefault();
    const count = document.getElementById('subjno').value;

    let tot_marks = 0;
    for (let i = 1; i <= count; i++) {
        let marks = document.getElementById(`cmarks${i}`).value;
        if (marks !== '') {
            tot_marks += parseFloat(marks);
        }
    }
    let Average = (tot_marks / count);
    let avg=Average.toFixed(2); //Round upto 2
    if (avg >= 90) {
        alert(`Average=${avg}\nGrade=A+\nOutStanding!!`)
    }
    else if ((avg < 90) && (avg >= 80)) {
        alert(`Average=${avg}\nGrade=A\nExcellent!!`)
    }
    else if ((avg < 80) && (avg >= 70)) {
        alert(`Average=${avg}\nGrade=B+\nVery Good!!`)
    }
    else if ((avg < 70) && (avg >= 60)) {
        alert(`Average=${avg}\nGrade=B\nGood!!`)
    }
    else if ((avg < 60) && (avg >= 50)) {
        alert(`Average=${avg}\nGrade=C\nFair!!`)
    }
    else if ((avg < 50) && (avg >= 40)) {
        alert(`Average=${avg}\nGrade=A+\nWork Hard!!`)
    }
    else {
        alert(`Average=${avg}\nGrade=F\nFail!!`)
    }
}