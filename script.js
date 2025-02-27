function moveToNext(current, nextId) {
    if (current.value.length === 1 && nextId) {
        document.getElementById(nextId).focus();
    }
}

function checkCode() {
    const digit1 = document.getElementById('digit1').value;
    const digit2 = document.getElementById('digit2').value;
    const digit3 = document.getElementById('digit3').value;
    const result = document.getElementById('result');

    const enteredCode = digit1 + digit2 + digit3;

    if (enteredCode === '732') {
        result.textContent = 'Mission Accomplished';
        result.style.color = '#39FF14';
        launchConfetti();
    } else {
        result.textContent = 'Incorrect';
        result.style.color = 'red';
    }
}

function launchConfetti() {
    var duration = 3 * 800;
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 7,
            spread: 500,
            origin: { x: 0.5, y: 0.2 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

function clearInputs() {
    document.getElementById('digit1').value = '';
    document.getElementById('digit2').value = '';
    document.getElementById('digit3').value = '';
    document.getElementById('result').textContent = '';
}
