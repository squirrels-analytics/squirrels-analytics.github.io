# Installation

Create an empty project directory (e.g. `squirrels-tutorial`) and open it with your favorite IDE. Also, open the terminal in the same directory.

**Python 3.10 or higher is required to install Squirrels**. Confirm the appropriate version of [Python](https://www.python.org/downloads/) is installed by running:

```bash
python --version
```

This should print something like `Python 3.X.Y` in the terminal. Confirm that X >= 10.

It is recommended to create and activate a Python virtual environment first (see the tip below if you don't know how to create one). Install the Squirrels Python library into the virtual environment by running:

```bash
pip install "squirrels>=0.5.0b,<1"
```

To confirm it installed properly, run:

```bash
squirrels --version
```

Or simply run `sqrl --version` for short.

:::tip

Although not required, it is strongly recommended to create and activate a [Python virtual environment](https://realpython.com/python-virtual-environments-a-primer/) for the project.

There are a number of ways to create a Python virtual environment. One of the most common ways is by running `python -m venv .venv` in the terminal. This will create a ".venv" folder in your project.

Then, activate the virtual environment by doing one of the following:
- run `.venv\Scripts\activate` in a Windows terminal, or
- run `source .venv/bin/activate` in a Mac/Linux terminal, or
- in VSCode, install the Python extension, press `Ctrl+Shift+P`, go to `Python: Select Interpreter`, and select the ".venv" folder you just created such that VSCode will always activate it for you when opening the project

:::
