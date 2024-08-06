import React from 'react';
const ProjectCard: React.FC<{ title: string; description: string; imageUrl: string }> = ({ title, description, imageUrl }) => {
  return (
      
    <div className="relative group w-full md:w-1/3 p-4">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img src={imageUrl} alt={title} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110 " />
        <div className="absolute inset-0 bg-gradient-to-t from-purple3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projectData = [
    {
      title: 'Project One',
      description: 'Description for project one.',
      imageUrl: '/hank3.png',
    },
    {
      title: 'Project Two',
      description: 'Description for project two.',
      imageUrl: '/hank3.png',
    },
    {
      title: 'Project Three',
      description: 'Description for project three.',
      imageUrl: '/hank3.png',
    },
  ];

  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-purple2">
  <h1 className="text-4xl font-bold text-white mb-8">Projects</h1>
  <div className="flex flex-wrap items-center justify-center w-full">
    {projectData.map((project, index) => (
      <ProjectCard
        key={index}
        title={project.title}
        description={project.description}
        imageUrl={project.imageUrl}
      />
    ))}
  </div>
</div>
  );
};
/*
const ProjectCard: React.FC<{ title: string; description: string; imageUrl: string }> = ({ title, description, imageUrl }) => {
  return (
    <div className="relative group w-full md:w-1/3 p-4">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img src={imageUrl} alt={title} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110 " />
        <div className="absolute inset-0 bg-gradient-to-t from-purple3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projectData = [
    {
      title: 'Project One',
      description: 'Description for project one.',
      imageUrl: '/hank3.png',
    },
    {
      title: 'Project Two',
      description: 'Description for project two.',
      imageUrl: '/hank3.png',
    },
    {
      title: 'Project Three',
      description: 'Description for project three.',
      imageUrl: '/hank3.png',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 bg-purple2">
      {projectData.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
        />
      ))}
    </div>
  );
};
*/
export default Projects;
