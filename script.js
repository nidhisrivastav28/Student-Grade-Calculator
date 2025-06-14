function generateInputs() {
    const countField = document.getElementById('subjno');
    const count = countField.value;
    const input = document.getElementById('subjectInputs');
    const submitbtn = document.getElementById('btn');

    input.innerHTML = '';
    generate.style.display = 'none';

    for (let i = 1; i <= count; i++) {
        input.innerHTML += `
            <table>
                <tr> 
                    <th>
                        <select class="subject-select" id="select${i}" onchange="filterSubjects()">
                            <option value="">Select</option>
                            <option value="Mathematics">Mathematics</option>
                            <option value="Chemistry">Chemistry</option>
                            <option value="Physics">Physics</option>
                            <option value="Hindi">Hindi</option>
                            <option value="Computer">Computer</option>
                        </select>
                    </th>
                    <td>
                        <input type="number" id="cmarks${i}" placeholder="Enter the marks" min="0" max="100" required>
                    </td>
                </tr>
            </table>
        `;
    }

    // Hide the input field after use
    countField.style.display = 'none';

    // Add validation for marks
    for (let i = 1; i <= count; i++) {
        const markInput = document.getElementById(`cmarks${i}`);
    }

    submitbtn.style.display = 'block';
}

//function to validate Generate Input: commit made on version2
function handleGenerateClick() {
    const input = document.getElementById('subjno').value;
    if (input>0 && input<6) {
      generateInputs();
    }
     else {
        if (input>6) {
            alert("exceeds subjects");
        } else {
           alert("Please enter valid input"); 
        }
        
    }
      
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
        alert(`Average=${avg}\nGrade=D\nWork Hard!!`)
    }
    else {
        alert(`Average=${avg}\nGrade=F\nFail!!`)
    }
}

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})