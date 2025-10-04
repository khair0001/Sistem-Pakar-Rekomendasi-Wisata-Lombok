document.addEventListener('DOMContentLoaded', function() {
    // Variabel untuk melacak state aplikasi
    let currentNodeId = 'P1';
    let history = [];
    let historyAnswers = [];

    const questionTextElement = document.getElementById('questionText');
    const choicesContainer = document.getElementById('choicesContainer');
    const decisionForm = document.getElementById('decisionForm');
    const backButton = document.getElementById('backButton');
    const rekomendasiContainer = document.getElementById('rekomendasi');
    const breadcrumbContainer = document.getElementById('breadcrumb');
    const restartButton = document.getElementById('restartButton');

    // Fungsi untuk memperbarui breadcrumb
    function updateBreadcrumb() {
        if (historyAnswers.length === 0) {
            breadcrumbContainer.innerHTML = '';
            breadcrumbContainer.style.display = 'none';
            return;
        }

        breadcrumbContainer.style.display = 'flex';
        let breadcrumbHTML = historyAnswers.map(answer => 
            `<span class="breadcrumb-item">${answer}</span>`
        ).join('<span class="breadcrumb-arrow">→</span>');
        
        breadcrumbContainer.innerHTML = breadcrumbHTML;
    }

    // Fungsi untuk menampilkan pertanyaan dan pilihan
    function renderQuestion() {
        // Sembunyikan rekomendasi jika sebelumnya ditampilkan
        rekomendasiContainer.classList.add('hidden');
        decisionForm.classList.remove('hidden');
        
        const currentNode = pohonKeputusan[currentNodeId];
        questionTextElement.textContent = currentNode.pertanyaan;
        
        let htmlChoices = '';
        currentNode.pilihan.forEach((pilihan, index) => {
            const uniqueId = `choice_${currentNodeId}_${index}`;
            htmlChoices += `
                <div class="choice-item">
                    <input type="radio" id="${uniqueId}" name="jenisWisata" value="${pilihan.jawaban}" data-next="${pilihan.nodeBerikutnya}">
                    <label for="${uniqueId}">${pilihan.jawaban}</label>
                </div>
            `;
        });
        choicesContainer.innerHTML = htmlChoices;

        // Event listener untuk setiap pilihan
        const radioButtons = document.querySelectorAll('input[name="jenisWisata"]');
        radioButtons.forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.checked) {
                    handleChoice(this);
                }
            });
        });

        // Tampilkan atau sembunyikan tombol kembali
        if (history.length > 0) {
            backButton.style.display = 'inline-block';
        } else {
            backButton.style.display = 'none';
        }

        // Update breadcrumb
        updateBreadcrumb();
    }

    // Fungsi untuk menangani pilihan
    function handleChoice(selectedRadio) {
        const selectedAnswer = selectedRadio.value;
        const nextNodeId = selectedRadio.dataset.next;

        // Simpan node saat ini ke riwayat
        history.push(currentNodeId);
        historyAnswers.push(selectedAnswer);

        // Update node saat ini
        currentNodeId = nextNodeId;

        // Delay sebentar untuk efek visual
        setTimeout(() => {
            // Cek apakah node berikutnya adalah rekomendasi atau pertanyaan
            const nextNode = pohonKeputusan[currentNodeId];
            if (nextNode.rekomendasi) {
                // --- PERUBAHAN ---
                // Kirim seluruh objek node, bukan hanya teksnya
                renderRecommendation(nextNode); 
            } else {
                renderQuestion();
            }
        }, 300);
    }
    
    // Fungsi untuk menampilkan rekomendasi
    function renderRecommendation(recommendationNode) {
        decisionForm.classList.add('hidden');
        rekomendasiContainer.classList.remove('hidden');
        
        const recommendationTextElement = document.getElementById('recommendationText');
        const recommendationImageContainer = document.getElementById('recommendationImage');
        
        const rekomendasi = recommendationNode.rekomendasi;
        // Ambil path gambar langsung dari node, berikan gambar default jika tidak ada
        const imageUrl = recommendationNode.image || "assets/images/default.jpg"; 
        
        recommendationTextElement.textContent = rekomendasi;
        
        recommendationImageContainer.innerHTML = `
            <img src="${imageUrl}" alt="${rekomendasi}" class="recommendation-image" onerror="this.onerror=null;this.src='assets/images/default.jpg';">
        `;

        // Update breadcrumb untuk hasil akhir
        updateBreadcrumb();
    }

    // Event listener untuk tombol "Kembali"
    backButton.addEventListener('click', function() {
        if (history.length > 0) {
            currentNodeId = history.pop();
            historyAnswers.pop();
            renderQuestion();
        }
    });

    // Event listener untuk tombol "Mulai Ulang"
    restartButton.addEventListener('click', function() {
        currentNodeId = 'P1';
        history = [];
        historyAnswers = [];
        renderQuestion();
    });

    // Mulai aplikasi dengan pertanyaan pertama
    renderQuestion();
});