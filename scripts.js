
var description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, quisquam quam voluptatibus ipsa voluptas recusandae reiciendis, molestiae saepe architecto animi doloribus sapiente molestias corporis. Labore eius facere ullam quas consectetur?';
function showDetails(title, date) {
    Swal.fire({
        title: title,
        html: `<p>Details and additional information about ${title} on ${date}.</p> <br><hr color='black' /><br>${description}`,
        icon: 'info',
        confirmButtonText: 'Close',
        confirmButtonColor: '#3085d6'
    });
}

//fake loading at the beginning
        
setTimeout(() => {
    document.querySelector('loading').remove();
}, 2000);

//url parser to navigate to different sections //.com#about
const url = window.location.href;

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = this.getAttribute('data-target');
        document.querySelectorAll('.page').forEach(page => {
            page.classList.add('hidden-page');
            page.classList.remove('visible-page');
        });
        
        document.getElementById(target).classList.add('visible-page');
        document.getElementById(target).classList.remove('hidden-page');
    });
});


function openDialog() {
    document.getElementById('membership-dialog').classList.remove('hidden');
    document.getElementById('membership-dialog').classList.add('visible');
}

function closeDialog() {
    document.getElementById('membership-dialog').classList.remove('visible');
    document.getElementById('membership-dialog').classList.add('hidden');
}

async function startCalculation() {
    const { value: isStudent } = await Swal.fire({
        title: 'Are you a student?',
        icon: 'question',
        input: 'radio',
        inputOptions: {
            yes: 'Yes',
            no: 'No'
        },
        allowOutsideClick: false,
        inputValidator: (value) => {
            if (!value) {
                return 'You need to choose an option!'
            }
        }
    });

    if (isStudent) {
        const { value: needUniform } = await Swal.fire({
            title: 'Do you need a uniform?',
            icon: 'question',
            input: 'radio',
            inputOptions: {
                yes: 'Yes',
                no: 'No'
            },
            allowOutsideClick: false,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to choose an option!'
                }
            }
        });

        const { value: needEquipment } = await Swal.fire({
            title: 'Do you need equipment rental?',
            icon: 'question',
            input: 'radio',
            inputOptions: {
                yes: 'Yes',
                no: 'No'
            },
            allowOutsideClick: false,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to choose an option!'
                }
            }
        });

        const baseFee = 150;
        const uniformCost = needUniform === 'yes' ? 0 : 30;
        const equipmentCost = needEquipment === 'yes' ? 0 : 20;
        const total = baseFee + uniformCost + equipmentCost;

        Swal.fire({
            title: 'Your Total Fee',
            text: `As a ${isStudent ? 'student' : 'non-student'}, your total fee is $${total}.`,
            icon: 'success',
            confirmButtonText: 'Close',
            allowOutsideClick: false
        });
    } else {
        const { value: needUniform } = await Swal.fire({
            title: 'Do you need a uniform?',
            icon: 'question',
            input: 'radio',
            inputOptions: {
                yes: 'Yes',
                no: 'No'
            },
            allowOutsideClick: false,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to choose an option!'
                }
            }
        });

        const { value: needEquipment } = await Swal.fire({
            title: 'Do you need equipment rental?',
            icon: 'question',
            input: 'radio',
            inputOptions: {
                yes: 'Yes',
                no: 'No'
            },
            allowOutsideClick: false,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to choose an option!'
                }
            }
        });

        const baseFee = 150;
        const uniformCost = needUniform === 'yes' ? 30 : 0;
        const equipmentCost = needEquipment === 'yes' ? 20 : 0;
        const total = baseFee + uniformCost + equipmentCost;

        Swal.fire({
            title: 'Your Total Fee',
            text: `Your total fee is $${total}.`,
            icon: 'success',
            confirmButtonText: 'Close',
            allowOutsideClick: false
        });
    }
}