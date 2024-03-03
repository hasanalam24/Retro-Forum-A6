const loadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    // console.log(data.posts)
    const posts = data.posts;

    const leftCardContainer = document.getElementById('left-card-container')
    posts.forEach(post => {
        console.log(post)

        const div = document.createElement('div')

        div.innerHTML = `
        <div id="left-card-container" class="space-y-3 bg-[#ecebeb] p-8 rounded-xl mt-5">

                    <div class="flex">
                        <div class="flex gap-5">
                            <div class="indicator">
                                <span class="indicator-item badge badge-secondary"></span>
                                <div class="grid w-12 h-12 bg-base-300 place-items-center">content</div>
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

                    <div class="border border-dashed "></div>

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
                            <i class="fa-solid fa-envelope-open-text"></i>
                        </div>
                    </div>
                </div>

        `
        leftCardContainer.appendChild(div)

    });

}
loadData()