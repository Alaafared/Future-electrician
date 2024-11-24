// الأسئلة والإجابات
const questions = [
    { 
        question: "قيمة البيكو فاراد تساوي ..............", 
        answers: ["10<suP>-6</suP>فاراد", "10<suP>-9</suP>فاراد", "10<suP>-12</suP>فاراد"], 
        correct: "10<suP>-12</suP>فاراد" 
    },
    { 
        question: "قيمة نانو فاراد تساوي ..............", 
        answers: ["10<suP>-6</suP>فاراد", "10<suP>-9</suP>فاراد", "10<suP>-12</suP>فاراد"], 
        correct: "10<suP>-9</suP>فاراد"
    },
    { 
        question: "قيمة ميكرو فاراد تساوي ..............", 
        answers: ["10<suP>-6</suP>فاراد", "10<suP>-9</suP>فاراد", "10<suP>-12</suP>فاراد"], 
        correct: "10<suP>-6</suP>فاراد"
    },
    { 
        question: "قيمة مللي فاراد تساوي ..............", 
        answers: ["10<suP>-2</suP>فاراد", "10<suP>-3</suP>فاراد", "10<suP>3</suP>فاراد"], 
        correct: "10<suP>-3</suP>فاراد" 
    },
    { 
        question: "قيمة ميجا فاراد تساوي ..............", 
        answers: ["10<suP>3</suP>فاراد", "10<suP>6</suP>فاراد", "10<suP>9</suP>فاراد"], 
        correct: "10<suP>6</suP>فاراد"
    },
    { 
        question: "قيمة جيجا فاراد تساوي ..............", 
        answers: ["10<suP>3</suP>فاراد", "10<suP>6</suP>فاراد", "10<suP>9</suP>فاراد"], 
        correct: "10<suP>9</suP>فاراد"
    },
    { 
        question: "قيمة كيلو فاراد تساوي ..............", 
        answers: ["10<suP>3</suP>فاراد", "10<suP>6</suP>فاراد", "10<suP>9</suP>فاراد"], 
        correct: "10<suP>3</suP>فاراد" 
    },
    { 
        question: "قيمة تيرا فاراد تساوي ..............", 
        answers: ["10<suP>6</suP>فاراد", "10<suP>12</suP>فاراد", "10<suP>9</suP>فاراد"], 
        correct: "10<suP>12</suP>فاراد" 
    },
    { 
        question: "وحدة قياس الشحنة الكهربائية هي", 
        answers: ["الأمبير", "الفولت", "الكولوم"], 
        correct: "الكولوم" 
    },
    { 
        question: "وحدة قياس القوة الدافعة الكهربائية هي", 
        answers: ["الأوم", "الفولت", "الوات"], 
        correct: "الفولت" 
    },
    { 
        question: "تتكون الدائرة الكهربية من .........", 
        answers: ["منبع كهربي", "حمل كهربي", "مفتاح تحكم","اسلاك توصيل","كل ماسبق"], 
        correct: "كل ماسبق" 
    },
    { 
        question: "وجد ثلاثة أنواع شائعة من الأحمال.........", 
        answers: ["حمل مادي", "حمل حثي", "حمل سعوي","كل ماسبق"], 
        correct: "كل ماسبق" 
    },
    { 
        question: "عند ثبوت المقاومة تكون العلاقة بين (......) المار في موصل و (.....) بين طرفيه علاقة (......)", 
        answers: ["التيار , الجهد , عكسية", "التيار , الجهد , طردية"], 
        correct:  "التيار , الجهد , طردية"
    },
    { 
        question: "ينص قانون أوم على أن التيار المار في موصل يتناسب طردياً مع فرق الجهد بين طرفي هذا الموصل عند ثبوت  قيمة مقاومة الموصل", 
        answers: ["صح", "خطأ"], 
        correct: "صح" 
    },
    { 
        question: "الصيغ الرياضية المختلفة لقانون أوم (.....),(......),(.......) ", 
        answers: ["I = V / R", "R = V / I", "V = I * R","كل ماسبق"], 
        correct: "كل ماسبق" 
    },
    { 
        question: "  القدرة فى دوائر التيار المستمر تساوى حاصل ضرب ....... * ....... وتقاس بوحدة .......", 
        answers: ["الجهد * التيار وتقاس بالوات", "الجهد في المقاومة وتقاس بالامبير","التيار في المقاومة وتقاس بالفولت"], 
        correct: "الجهد * التيار وتقاس بالوات" 
    },
    {
        question: "وحدة قياس الجهد ..........",
        answers: ["جول / كولوم", "كولوم / ثانية","نيوتن"], 
        correct: "جول / كولوم"
    },{
        question: "وحدة قياس التيار ..........",
        answers: ["جول / كولوم", "كولوم / ثانية","نيوتن"], 
        correct: "كولوم / ثانية"
    }
   
    
    // أضف بقية الأسئلة هنا
];

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];

// خلط الأسئلة
function shuffleQuestions() {
    shuffledQuestions = [...questions];
    shuffledQuestions.sort(() => Math.random() - 0.5);
}

// تحميل السؤال الأول عند فتح الصفحة
document.addEventListener("DOMContentLoaded", () => {
    shuffleQuestions(); // خلط الأسئلة عند تحميل الصفحة
    loadQuestion();
});

function loadQuestion() {
    const questionContainer = document.getElementById("question-text");
    const answersContainer = document.getElementById("answers");

    // تحديث نص السؤال
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;

    // تحديث خيارات الإجابة
    answersContainer.innerHTML = ""; // مسح الخيارات القديمة
    currentQuestion.answers.forEach(answer => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="answer" value="${answer}"> ${answer}`;
        answersContainer.appendChild(label);
    });

    // إظهار أو إخفاء الأزرار حسب السؤال
    const nextBtn = document.getElementById("next-btn");
    const submitBtn = document.getElementById("submit-btn");

    if (currentQuestionIndex === shuffledQuestions.length - 1) {
        nextBtn.style.display = "none";
        submitBtn.style.display = "inline-block";
    } else {
        nextBtn.style.display = "inline-block";
        submitBtn.style.display = "none";
    }
}

function nextQuestion() {
    // التحقق من اختيار المستخدم للإجابة
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert("يرجى اختيار إجابة قبل الانتقال للسؤال التالي.");
        return;
    }

    // حفظ الإجابة
    userAnswers.push(selectedAnswer.value);

    // الانتقال للسؤال التالي
    currentQuestionIndex++;
    loadQuestion();
}

function submitQuiz() {
    // حفظ الإجابة الأخيرة
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        userAnswers.push(selectedAnswer.value);
    }

    // حساب النتيجة
    let score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === shuffledQuestions[index].correct) {
            score++;
        }
    });

    // عرض النتيجة
    const resultContainer = document.getElementById("result");
    resultContainer.style.display = "block";
    resultContainer.innerHTML = `لقد حصلت على <strong>${score}/${questions.length}</strong>`;
    if (score === questions.length) {
        resultContainer.innerHTML += "  <br>رائع! إجاباتك كلها صحيحة!<br> مع تحيات أستاذ علاء فريد واسرة الكهرباء<br>شكر خاص لتوجيه كهرباء الاسماعيلية المهندس محمود جابر والمهندس هشام السيد";
    } else {
        resultContainer.innerHTML += "<br>يمكنك تحسين أدائك في المرة القادمة. <br> مع تحيات أستاذ علاء فريد واسرة الكهرباء<br>شكر خاص لتوجيه كهرباء الاسماعيلية المهندس محمود جابر والمهندس هشام السيد";
    }
    // إخفاء السؤال والأزرار
document.getElementById("quiz-container").style.display = "none";
}
