// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const characterCards = document.querySelectorAll('.character-card');
    const levelButtons = document.querySelectorAll('.level-btn');
    const workoutPlan = document.querySelector('.workout-plan');
    const trainingDetails = document.querySelector('.training-details');
    const gravityInput = document.getElementById('gravity');
    const gravityValue = document.querySelector('.gravity-value');
    
    let selectedCharacter = null;
    let selectedLevel = null;

    // Character selection
    characterCards.forEach(card => {
        card.addEventListener('click', function() {
            characterCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            selectedCharacter = this.dataset.character;
            checkSelection();
        });
    });

    // Level selection
    levelButtons.forEach(button => {
        button.addEventListener('click', function() {
            levelButtons.forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
            selectedLevel = this.dataset.level;
            checkSelection();
        });
    });

    // Gravity control
    gravityInput.addEventListener('input', function() {
        gravityValue.textContent = `${this.value}x Earth's Gravity`;
        if (selectedCharacter && selectedLevel) {
            generateWorkoutPlan();
        }
    });

    function checkSelection() {
        if (selectedCharacter && selectedLevel) {
            workoutPlan.style.display = 'block';
            generateWorkoutPlan();
        }
    }

    function generateWorkoutPlan() {
        const workouts = {
            goku: {
                'earthling': [
                    '100 Push-ups',
                    '100 Sit-ups',
                    '100 Squats',
                    '10km Run',
                    'Basic Ki Control meditation'
                ],
                'saiyan': [
                    '1000 Push-ups',
                    '1000 Sit-ups',
                    '1000 Squats',
                    'Sprint training in 2x gravity',
                    'Advanced Ki blast training'
                ],
                'super-saiyan': [
                    'Hyperbolic Time Chamber training',
                    'Super Saiyan transformation practice',
                    'Kamehameha wave mastery',
                    'Instant transmission training',
                    'Battle meditation in 100x gravity'
                ]
            },
            vegeta: {
                'earthling': [
                    '150 Push-ups',
                    '150 Sit-ups',
                    '150 Squats',
                    'Gravity chamber training (2x)',
                    'Basic energy blast practice'
                ],
                'saiyan': [
                    '2000 Push-ups',
                    '2000 Sit-ups',
                    'Gravity chamber training (10x)',
                    'Final Flash technique practice',
                    'Elite combat sequences'
                ],
                'super-saiyan': [
                    'Ultra ego training',
                    'Maximum gravity chamber session',
                    'Final Flash mastery',
                    'Super Saiyan Blue training',
                    'Royal Saiyan meditation'
                ]
            },
            piccolo: {
                'earthling': [
                    'Meditation (2 hours)',
                    'Weight training with clothes',
                    'Basic stretching routine',
                    'Mental focus exercises',
                    'Light sparring practice'
                ],
                'saiyan': [
                    'Advanced meditation (4 hours)',
                    'Special Beam Cannon practice',
                    'Weighted clothing training (100kg)',
                    'Mental battle simulation',
                    'Ki control mastery'
                ],
                'super-saiyan': [
                    'Extreme meditation (8 hours)',
                    'Special Beam Cannon mastery',
                    'Multi-form technique training',
                    'Maximum weighted training',
                    'Advanced regeneration practice'
                ]
            },
            gohan: {
                'earthling': [
                    'Study session (2 hours)',
                    'Basic martial arts training',
                    'Light meditation',
                    'Ki control basics',
                    'Physical conditioning'
                ],
                'saiyan': [
                    'Advanced study session',
                    'Mystic power training',
                    'Father-son Kamehameha practice',
                    'Hidden potential unleashing',
                    'Battle strategy development'
                ],
                'super-saiyan': [
                    'Ultimate form training',
                    'Maximum power unleashing',
                    'Scholar warrior meditation',
                    'Advanced combat techniques',
                    'Beast form transformation'
                ]
            }
        };

        const gravity = gravityInput.value;
        const exercises = workouts[selectedCharacter][selectedLevel];
        
        const html = `
            <h3>${selectedCharacter.charAt(0).toUpperCase() + selectedCharacter.slice(1)}'s Training Program</h3>
            <p class="gravity-notice">Training under ${gravity}x Earth's gravity</p>
            <ul class="workout-list">
                ${exercises.map(exercise => `<li>${exercise}</li>`).join('')}
            </ul>
            <p class="training-note">Remember: A true warrior pushes beyond their limits!</p>
        `;

        trainingDetails.innerHTML = html;
    }
});