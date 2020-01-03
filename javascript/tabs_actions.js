var contentResume = document.getElementById('content-resume');
var contentExperience = document.getElementById('content-experience');
var contentSkills = document.getElementById('content-skills');
var contentAchievements = document.getElementById('content-achievements');
var contentContact = document.getElementById('content-contact');
showContent(localStorage.getItem('tabselected') || 'resume');

function showContent(contentType) {
    contentResume.style.display = 'none';
    contentExperience.style.display = 'none';
    contentSkills.style.display = 'none';
    contentAchievements.style.display = 'none';
    contentContact.style.display = 'none';
    localStorage.setItem('tabselected', contentType);
    switch (contentType) {
        case 'resume':
            contentResume.style.display = 'flex';
            break;
        case 'experience':
            contentExperience.style.display = 'flex';
            break;
        case 'skills':
            contentSkills.style.display = 'flex';
            break;
        case 'achievements':
            contentAchievements.style.display = 'flex';
            break;
        case 'contact':
            contentContact.style.display = 'flex';
            break;
        default:
            break;
    }
}