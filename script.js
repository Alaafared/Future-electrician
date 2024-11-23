// الأسئلة والإجابات
const questions = [
    { 
        question: "لمس الأجزاء المكشوفة من الدوائر الكهربائية يؤدي إلى صدمة كهربائية", 
        answers: ["صح", "خطأ"], 
        correct: "صح" 
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
        question: "يجب أن تكون كافة الأجھزة الكھربائیة مؤرضة", 
        answers: ["صح", "خطأ"], 
        correct: "صح" 
    },
];

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];

// خلط الأسئلة
function shuffleQuestions() {
    shuffledQuestions = [...questions];
    shuffledQuestions.sort(() => Math.random() - 0.5);
}

// تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    shuffleQuestions(); // خلط الأسئلة عند تحميل الصفحة
    loadQuestion();
});

function loadQuestion() {
    try {
        const questionContainer = document.getElementById("question-text");
        const answersContainer = document.getElementById("answers");

        // التحقق من وجود العناصر
        if (!questionContainer || !answersContainer) {
            throw new Error("عنصر السؤال أو الإجابات غير موجود!");
        }

        // تحديث نص السؤال
        const currentQuestion = shuffledQuestions[currentQuestionIndex];
        questionContainer.textContent = currentQuestion.question;

        // تحديث خيارات الإجابة
        answersContainer.innerHTML = ""; // مسح الخيارات القديمة
        currentQuestion.answers.forEach(answer => {
            const label = document.createElement("label");
            label.style.display = "block"; // عرض الخيارات بشكل رأسي
            label.innerHTML = `<input type="radio" name="answer" value="${answer}"> ${answer}`;
            answersContainer.appendChild(label);
        });

        // تحديث الأزرار
        const nextBtn = document.getElementById("next-btn");
        const submitBtn = document.getElementById("submit-btn");

        if (!nextBtn || !submitBtn) {
            throw new Error("عناصر الأزرار غير موجودة!");
        }

        if (currentQuestionIndex === shuffledQuestions.length - 1) {
            nextBtn.style.display = "none";
            submitBtn.style.display = "inline-block";
        } else {
            nextBtn.style.display = "inline-block";
            submitBtn.style.display = "none";
        }
    } catch (error) {
        console.error("خطأ أثناء تحميل السؤال:", error.message);
    }
}

function nextQuestion() {
    try {
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
    } catch (error) {
        console.error("خطأ أثناء الانتقال للسؤال التالي:", error.message);
    }
}

function submitQuiz() {
    try {
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
        if (!resultContainer) {
            throw new Error("عنصر النتيجة غير موجود!");
        }

        resultContainer.style.display = "block";
        resultContainer.innerHTML = `لقد حصلت على <strong>${score}/${questions.length}</strong>`;
        if (score === questions.length) {
            resultContainer.innerHTML += "<br>رائع! إجاباتك كلها صحيحة!";
        } else {
            resultContainer.innerHTML += "<br>يمكنك تحسين أدائك في المرة القادمة.";
        }

        // إخفاء الاختبار
        document.getElementById("quiz-container").style.display = "none";
    } catch (error) {
        console.error("خطأ أثناء عرض النتيجة:", error.message);
    }
}
