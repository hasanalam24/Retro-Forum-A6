const loadingSpinner = document.getElementById('loading-Spinner')
const loadingSpinner2 = document.getElementById('loading-Spinner2')

const latestCardSpinner = document.getElementById('latest-Container')


setTimeout(() => {
    loadingSpinner.classList.add('hidden')
    loadData('Comedy')
    latestCardSpinner.classList.remove('hidden')
    loadingSpinner2.classList.add('hidden')
}, 2000)


const loadData = async (category) => {

    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`);
    const data = await res.json();
    // console.log(data.posts)
    const posts = data.posts;

    const leftCardContainer = document.getElementById('left-card-container')
    leftCardContainer.textContent = '';

    posts.forEach(post => {

        let isActive = '';
        if (post.isActive) {
            isActive = `<span id="indicator" class="bg-green-500 border-none indicator-item badge badge-secondary"></span>`
        }
        else if (!post.isActive) {
            isActive = `<span id="indicator" class="bg-red-500 border-none indicator-item badge badge-secondary"></span>`
        }

        const div = document.createElement('div')

        div.innerHTML = `
        <div id="left-card-container" class="space-y-3 bg-[#ecebeb] p-8 rounded-xl mt-5">

                    <div class="flex">
                        <div class="flex gap-5">
                            <div class="indicator">
                            ${isActive}
                                <div class="grid w-12 h-12 bg-base-300 place-items-center "><img class="rounded-xl" src="${post.image}" alt=""></div>
                            </div>
                            <div>
                                <div class="flex gap-5">
                                    <p>#<span id="music-category">${post.category}</span></p>
                                    <p>Author: <span id="author-name">${post.author.name}</span></p>
                                </div>
                                <div>
                                    <h4 id="music-title" class="text-xl font-medium">${post.title}</h4>

                                </div>
                            </div>
                        </div>
                    </div>
                    <p id="music-description" class="ml-[70px]">${post.description}</p>

                    <div class="opacity-70	 bg-black border border-dashed "></div>

                    <div class="flex justify-between items-center">

                        <div class="flex gap-5 items-center">
                            <div class="flex items-center gap-2">
                                <i class="fa-regular fa-message"> </i>
                                <span id="comments">${post.comment_count}</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <i class="fa-regular fa-eye"></i>
                                <span id="views">${post.view_count}</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <i class="fa-regular fa-clock"></i>
                                <span id="time">${post.posted_time} mins</span>
                            </div>
                        </div>

                        <div class="text-[#10B981]">
                            <i onclick="markClick()" class="fa-solid fa-envelope-open-text"></i>
                        </div>
                    </div>
                </div>

        `
        leftCardContainer.appendChild(div)

    });


}

let total = 1
const markClick = () => {
    const readCount = document.getElementById('mark-read-count')
    const Count = readCount.innerText;
    const convertCount = parseInt(Count)
    console.log(convertCount)
    readCount.innerText = total + convertCount;

    const titleContainer = document.getElementById('title-container')
    const div = document.createElement('div')

    div.innerHTML = `
        <div class="p-4 rounded-xl bg-[#ecebeb] flex justify-between gap-14 mt-5">
        <h3 class="text-lg"></h3>
        <div class="flex items-center gap-2">
            <i class="fa-regular fa-eye opacity-90"></i>
            <span id="views"></span>
        </div>
    </div>

        `
    titleContainer.appendChild(div)

}

const searchBtn = () => {
    const inputField = document.getElementById('input-field').value;
    loadData(inputField)
    // console.log(inputField)
}

const latestPost = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const allData = data;
    // console.log(allData)
    const latestContainer = document.getElementById('latest-Container')

    allData.forEach((singleData) => {
        // console.log(single)
        const div = document.createElement('div')

        div.innerHTML = `
        
        <div class="card p-4 bg-base-100 shadow-xl space-y-5">
                    <figure><img src="${singleData.cover_image}"
                            alt="Shoes" />
                    </figure>
                    <div class="space-y-3">
                        <div class="flex gap-2 items-center">
                            <i class="fa-solid fa-calendar-days"></i>
                            <p>${singleData.author.posted_date ? singleData.author.posted_date : "No Published Date"}</p>
                        </div>
                        <h2 class="card-title">${singleData.title}</h2>
                        <p>${singleData.description}</p>
                        <div class="flex gap-5 items-center">
                            <div class="w-[45px] h-[45px] ">
                            <img class="rounded-full" src="${singleData.profile_image}" alt="">
                            </div>
                            <div>
                                <h5 class="text-lg">${singleData.author.name}</h5>
                                <p>${singleData.author.designation ? singleData.author.designation : "Unknown"}</p>
                            </div>
                        </div>
                    </div>
                </div>
        `

        latestContainer.appendChild(div)
    })
}

latestPost()
