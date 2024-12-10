interface Resume {
    name: string;
    email: string;
    phone: string;
    address: string;
    objective: string;
    experience: string;
    skills: string;
    education: string;
    project: string;
}

function generateResume(): void {
    // Retrieve values from input fields
    const name = (document.getElementById('name') as HTMLInputElement)?.value ?? '';
    const email = (document.getElementById('email') as HTMLInputElement)?.value ?? '';
    const phone = (document.getElementById('phone') as HTMLInputElement)?.value ?? '';
    const address = (document.getElementById('address') as HTMLInputElement)?.value ?? '';
    const objective = (document.getElementById('objective') as HTMLTextAreaElement)?.value ?? '';
    const experience = (document.getElementById('experience') as HTMLTextAreaElement)?.value ?? '';
    const skills = (document.getElementById('skills') as HTMLTextAreaElement)?.value ?? '';
    const education = (document.getElementById('education') as HTMLTextAreaElement)?.value ?? '';
    const project = (document.getElementById('project') as HTMLTextAreaElement)?.value ?? '';

    // Create a Resume object
    const resume: Resume = { name, email, phone, address, objective, experience, skills, education, project };

    // Retrieve output elements
    const resumeNameElement = document.getElementById('resume-name');
    const resumeEmailElement = document.getElementById('resume-email');
    const resumePhoneElement = document.getElementById('resume-phone');
    const resumeAddressElement = document.getElementById('resume-address');
    const resumeObjectiveElement = document.getElementById('resume-objective');
    const resumeExperienceElement = document.getElementById('resume-experience');
    const resumeSkillsElement = document.getElementById('resume-skills');
    const resumeEducationElement = document.getElementById('resume-education');
    const resumeProjectElement = document.getElementById('resume-project');
    const resumeOutputElement = document.getElementById('resume-output');

    // Assign values to output elements
    if (resumeNameElement) resumeNameElement.textContent = resume.name;
    if (resumeEmailElement) resumeEmailElement.textContent = resume.email;
    if (resumePhoneElement) resumePhoneElement.textContent = resume.phone;
    if (resumeAddressElement) resumeAddressElement.textContent = resume.address;
    if (resumeObjectiveElement) resumeObjectiveElement.textContent = resume.objective;
    if (resumeExperienceElement) resumeExperienceElement.textContent = resume.experience;
    if (resumeSkillsElement) resumeSkillsElement.textContent = resume.skills;
    if (resumeEducationElement) resumeEducationElement.textContent = resume.education;
    if (resumeProjectElement) resumeProjectElement.textContent = resume.project;

    // Show the resume output section
    if (resumeOutputElement) resumeOutputElement.style.display = 'block';
}

// Attach event listener to the button
const generateButton = document.getElementById('generate-resume');
if (generateButton) {
    generateButton.addEventListener('click', generateResume);
}
