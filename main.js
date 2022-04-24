const Mitsuo = {
  Name: {
    nameKanji: "多司馬　光夫",
    nameHiragana: "たじま　みつお",
    nameAlphabet: "Tajima Mitsuo",
  },
  age: 22,
  address: {
    prefecture: "兵庫",
    city: "姫路",
  },
  hobbies: ["料理", "食べる事", "おでかけ"],
  shcoolwork: {
    university: "兵庫県立大学",
    major: "電気物性工学",
    research: "繊維状ナノ構造形成技術に関する研究",
  },
  offCampusActivities: {
    activity: "ぴあ応援活動",
    activityContent: "社会的養護の中高生を支援する活動",
  },
  Dream: [
    "環境問題を解決に貢献して、持続可能な社会の創成",
    "子どもたちがどんな環境に生まれたとしても、生まれて良かったと思えるような社会の創生",
  ],
};

const product = {
  pia: {
    piaBook: {
      piaBookPhoto: "j",
      piaBookUrl: "jj",
    },
    piaRadio: {
      piaRadioPhoto: "jjjj",
    },
    piaFess: {
      piaFessPhoto: "kkk",
    },
  },
  researchProduct: {
    researchPhoto: "hhh",
    researchContent:
      "光触媒や太陽光パネルなどへの産業応用が期待されている繊維状ナノ構造の形成技術開発を目標に研究しています。",
  },
};
const namehiragana = document.getElementById("namehiragana");
const namealphabet = document.getElementById("namealphabet");
const about = document.getElementById("shousai");
const shousai = document.getElementById("shousai");
const age = document.getElementById("age");
const address = document.getElementById("address");
const shcool = document.getElementById("shcool");
const university = document.getElementById("university");
const major = document.getElementById("major");
const research = document.getElementById("research");

let namekanji = document.getElementById("namekanji");

const a = function () {
  namekanji.textContent = Mitsuo.Name.nameKanji;
  university.textContent =
    university.textContent + Mitsuo.shcoolwork.university;
  major.textContent = major.textContent + Mitsuo.shcoolwork.major;
  research.textContent = research.textContent + Mitsuo.shcoolwork.research;
};

namekanji.addEventListener(
  "mouseover",
  function (event) {
    event.target.style.color = "orange";
    namehiragana.textContent = Mitsuo.Name.nameHiragana;
    namealphabet.textContent = Mitsuo.Name.nameAlphabet;
  },
  false
);
namekanji.addEventListener("mouseleave", function (event) {
  event.target.style.color = "black";
  namehiragana.textContent = "";
  namealphabet.textContent = "";
});

shousai.addEventListener(
  "mouseover",
  function (event) {
    event.target.style.color = "orange";
    age.textContent = Mitsuo.age;
    address.textContent = Mitsuo.address.prefecture + Mitsuo.address.city;
  },
  false
);

shousai.addEventListener("mouseleave", function (event) {
  event.target.style.color = "black";
  age.textContent = "";
  address.textContent = "";
});

const imageElement = document.getElementById("topimage");

fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    return res.json(); // 結果を json として読み込んで、次の then に渡す
  })
  .then((data) => {
    imageElement.src = data.message; // 画像を表示する
  });

a();
