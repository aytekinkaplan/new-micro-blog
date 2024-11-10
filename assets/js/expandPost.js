// Post metnini genişletmek için fonksiyon
export default function expandPost(postId) {
    const postElement = document.getElementById(postId);

    // Eleman yoksa hata vermemesi için kontrol ekleyin
    if (!postElement) {
        console.warn(`expandPost: Post element with ID ${postId} not found.`);
        return;
    }

    // Bulunan eleman için `expanded` sınıfını ekleyip kaldırır
    postElement.classList.toggle("expanded");
}

// DOM yüklendiğinde çalıştırılacak ana fonksiyon
document.addEventListener("DOMContentLoaded", () => {
    const contentLengthThreshold = 200;

    // Her gönderi kartının içindeki paragrafları seçin
    document.querySelectorAll(".gh-card-content").forEach((contentElement) => {
        const paragraphElement = contentElement.querySelector("p");

        // İçeriğin uzunluğu belirli bir eşiği aşıyorsa "Read more" bağlantısı ekleyin
        if (
            paragraphElement &&
            paragraphElement.textContent.length > contentLengthThreshold
        ) {
            paragraphElement.classList.add("long-content");

            // "Read more" bağlantısını oluştur
            const readMoreLink = document.createElement("a");
            readMoreLink.href = "#";
            readMoreLink.className = "gh-card-readmore";
            readMoreLink.innerText = "Read more";

            // Geçerli post'un `id` değerini elde et
            const postId = contentElement.closest(".gh-card").id;

            // "Read more" bağlantısına tıklanınca genişletme fonksiyonunu çağır
            readMoreLink.onclick = function (e) {
                e.preventDefault();
                if (postId) {
                    expandPost(postId);
                } else {
                    console.warn("Read more: Post ID not found.");
                }
            };

            // "Read more" bağlantısını elementin parent'ına ekle
            contentElement.appendChild(readMoreLink);
        }
    });
});
