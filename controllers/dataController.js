// const Data = require("../models/Data");

// // Insert data into the database
// exports.insertData = async (req, res) => {
//   try {
//     const dataToInsert = {
//       title: req.body.title,
//       model: req.body.model,
//     };

//     const newData = new Data(dataToInsert);
//     const savedData = await newData.save();

//     // Extract the generated _id from the saved document
//     const generatedId = savedData._id;
//     console.log("Data inserted successfully with ID:", generatedId);

//     res.send(
//       "Data inserted successfully with ID: " + generatedId + "\n" + savedData
//     );
//   } catch (error) {
//     console.error("Error inserting data:", error);
//     res.status(500).send("Error inserting data");
//   }
// };

const Data = require("../models/Data");

// Insert data into the database
exports.insertData = async (req, res) => {
  try {
    const { googleId, title, model } = req.body; // Destructure req.body to get googleId, title, model
    const dataToInsert = {
      googleId, // Associate project with googleId
      title,
      model,
    };

    const newData = new Data(dataToInsert);
    const savedData = await newData.save();

    // Extract the generated _id from the saved document
    const generatedId = savedData._id;
    console.log("Data inserted successfully with ID:", generatedId);

    res.send(
      "Data inserted successfully with ID: " + generatedId + "\n" + savedData
    );
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).send("Error inserting data");
  }
};

// Fetch all projects by googleId from the database
exports.getProjectsByGoogleId = async (req, res) => {
  try {
    const { googleId } = req.params;
    const projects = await Data.find({ googleId: googleId }); // Fetch projects by googleId
    res.json(projects); // Send the projects as JSON response
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).send("Error fetching projects");
  }
};

// Fetch all projects from the database
// exports.getProjects = async (req, res) => {
//   try {
//     const projects = await Data.find(); // Fetch all projects from the database
//     res.json(projects); // Send the projects as JSON response
//   } catch (error) {
//     console.error("Error fetching projects:", error);
//     res.status(500).send("Error fetching projects");
//   }
// };

// Update project data in the database
exports.updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Updating project with ID:🚀", id);
    const { title, model } = req.body;
    const updatedData = { title, model };

    await Data.findByIdAndUpdate(id, updatedData);
    console.log("Project updated successfully with ID:", id);

    res.send("Project updated successfully with ID: " + id);
  } catch (error) {
    console.error("Error updating project:", error);
    res.status(500).send("Error updating project");
  }
};
// Fetch project data for updating
exports.getProjectsToUpdate = async (req, res) => {
  console.log("Fetching projects to update");
  try {
    const projectId = req.params.id;
    console.log("Fetching project data for ID:", projectId);
    console.log("Fetching project data for ID:", projectId);
    const project = await Data.findById(projectId); // Fetch project data by ID
    // console.log("Project data:", project);
    res.json(project); // Send the project data as JSON response
  } catch (error) {
    console.error("Error fetching project data:", error);
    res.status(500).send("Error fetching project data");
  }
};

// Delete project data from the database
exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await Data.findByIdAndDelete(id);
    console.log("Project deleted successfully with ID:", id);

    res.send("Project deleted successfully with ID: " + id);
  } catch (error) {
    console.error("Error deleting project:", error);
    res.status(500).send("Error deleting project");
  }
};
