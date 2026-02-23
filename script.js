let interviewList = [];
let rejectedList =  [];
let currentStatus = 'all'

let totalCount = document.getElementById('total-count');
let totalInterview = document.getElementById('interview-count');
let totalReject = document.getElementById('rejected-count');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filter-section');

function calculateCount(){
    totalCount.innerText = allCardSection.children.length;
    totalInterview.innerText = interviewList.length;
    totalReject.innerText = rejectedList.length;
}
calculateCount()

function toggleStyle(id){
    allFilterBtn.classList.add('bg-slate-100', 'text-black');
    interviewFilterBtn.classList.add('bg-slate-100', 'text-black');
    rejectedFilterBtn.classList.add('bg-slate-100', 'text-black');

    allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    interviewFilterBtn.classList.remove('bg-black', 'text-white');
    rejectedFilterBtn.classList.remove('bg-black', 'text-white');  

    const selected = document.getElementById(id);

    currentStatus = id
    console.log(currentStatus);

    selected.classList.remove('bg-slate-100', 'text-black');
    selected.classList.add('bg-[#3B82F6]', 'text-white');

    if(id == 'interview-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview()

    }else if (id== 'all-filter-btn'){
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }else if(id== 'rejected-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejected()
    }
}

mainContainer.addEventListener('click', function(event){
    if(event.target.classList.contains('interview-btn')){
    const parentNode = event.target.parentNode.parentNode;

    const mobileFirst = parentNode.querySelector('.mobile-first').innerText
    const reactDeveloper = parentNode.querySelector('.react-developer').innerText
    const salaryDetails = parentNode.querySelector('.salary-details').innerText
    const status = parentNode.querySelector('.status').innerText
    const jobDetails = parentNode.querySelector('.job-details').innerText

    parentNode.querySelector('.status').innerText = 'Applied'

    const cardInfo ={
        mobileFirst,
        reactDeveloper,
        salaryDetails,
        status:'Applied',
        jobDetails
    }

    const jobExist = interviewList.find(item => item.mobileFirst == cardInfo.mobileFirst)
    
    if(!jobExist){
        interviewList.push(cardInfo)
    }

    rejectedList = rejectedList.filter(item=> item.mobileFirst != cardInfo.mobileFirst)

    if (currentStatus == 'rejected-filter-btn') {
            renderRejected()
        }

    calculateCount()

    }else if(event.target.classList.contains('rejected-btn')){
    const parentNode = event.target.parentNode.parentNode;

    const mobileFirst = parentNode.querySelector('.mobile-first').innerText
    const reactDeveloper = parentNode.querySelector('.react-developer').innerText
    const salaryDetails = parentNode.querySelector('.salary-details').innerText
    const status = parentNode.querySelector('.status').innerText
    const jobDetails = parentNode.querySelector('.job-details').innerText

    parentNode.querySelector('.status').innerText = 'Rejected'

    const cardInfo ={
        mobileFirst,
        reactDeveloper,
        salaryDetails,
        status:'Rejected',
        jobDetails
    }

    const jobExist = rejectedList.find(item => item.mobileFirst == cardInfo.mobileFirst)
    
    if(!jobExist){
        rejectedList.push(cardInfo)
    }
    
    interviewList = interviewList.filter(item=> item.mobileFirst != cardInfo.mobileFirst)

    if (currentStatus == "interview-filter-btn") {
            renderInterview()
        }
    calculateCount()
    }
});


function renderInterview(){
    filterSection.innerHTML = ''

    for(let interview of interviewList){
        console.log(interview);

        let div = document.createElement('div');
        div.className = 'card bg-slate-100 flex justify-between rounded'
        div.innerHTML = `
                <div class="left space-y-4 p-3 rounded">
                    <div>
                        <p class="mobile-first text-xl font-semibold text-[#002B70]">${interview.mobileFirst}</p>
                        <p class="react-developer text-[#323B49]">React Native Developer</p>
                    </div>

                    <div>
                        <p class="salary-details text-[#323B49]">Remote • Full-time • $130,000 - $175,000</p>
                    </div>

                    <div>
                        <span class="status text-[#002B70] bg-[#DBE8FF] p-1 rounded">${interview.status}</span>
                        <p class="job-details text-[#323B49]">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                    </div>
            
                    <div>
                        <button class="interview-btn mr-3 border-green-700 border-2 rounded px-2 text-green-700">INTERVIEW</button>
                        <button class="rejected-btn border-2 rounded px-2 border-red-700 text-red-700">REJECTED</button>
                    </div>
                </div>

                <div class="right">
                    <button class="mt-5 mr-5 p-2 bg-white rounded-full"><i class="fa-regular fa-trash-can"></i></button>
                </div>
        `
        filterSection.appendChild(div)
    }    
}

function renderRejected(){
    filterSection.innerHTML = ''

    for(let rejected of rejectedList){

        let div = document.createElement('div');
        div.className = 'card bg-slate-100 flex justify-between rounded'
        div.innerHTML = `
                <div class="left space-y-4 p-3 rounded">
                    <div>
                        <p class="mobile-first text-xl font-semibold text-[#002B70]">${rejected.mobileFirst}</p>
                        <p class="react-developer text-[#323B49]">React Native Developer</p>
                    </div>

                    <div>
                        <p class="salary-details text-[#323B49]">Remote • Full-time • $130,000 - $175,000</p>
                    </div>

                    <div>
                        <span class="status text-[#002B70] bg-[#DBE8FF] p-1 rounded">${rejected.status}</span>
                        <p class="job-details text-[#323B49]">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                    </div>
            
                    <div>
                        <button class="interview-btn mr-3 border-green-700 border-2 rounded px-2 text-green-700">INTERVIEW</button>
                        <button class="rejected-btn border-2 rounded px-2 border-red-700 text-red-700">REJECTED</button>
                    </div>
                </div>

                <div class="right">
                    <button class="mt-5 mr-5 p-2 bg-white rounded-full"><i class="fa-regular fa-trash-can"></i></button>
                </div>
        `
        filterSection.appendChild(div)
    }    
}