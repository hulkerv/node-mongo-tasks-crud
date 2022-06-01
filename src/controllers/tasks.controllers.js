import Task from "../models/Task";


// Render index
export const renderIndex = async (req, res) => {
  try {
    const tasks = await Task.find().lean(); //*lean permite devolver onjetos de js y no de mongo db
    res.render("index", { tasks });
  } catch (error) {
    console.log(error);
  }
};

// Add Task
export const addTask = async (req, res) => {
  const task = Task(req.body);
  const taskSaved = await task.save();
  res.redirect("/");
};

//Toggle DONE field
export const toggleDone = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    task.done = !task.done;
    await task.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

//Edit Task
export const renderEdit = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id).lean();
    res.render("edit", { task });
  } catch (error) {
    console.log(error);
  }
};

export const editTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndUpdate(id, req.body);
  res.redirect("/");
};

//Delete task
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect("/");
};


