# Contributing to AI Platform

We love your input! We want to make contributing to AI Platform as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

### Pull Requests

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

### Coding Standards

#### Frontend (TypeScript/React)
- Use TypeScript for all new code
- Follow ESLint configuration
- Use Prettier for code formatting
- Write meaningful component names
- Add JSDoc comments for complex functions

#### Backend (Python)
- Follow PEP 8 style guide
- Use type hints for all functions
- Write docstrings for all public functions
- Use meaningful variable and function names
- Add unit tests for new functionality

### Commit Messages

Use clear and meaningful commit messages:

```
feat: add SAP SuccessFactors integration
fix: resolve dashboard loading issue
docs: update API documentation
style: format code according to eslint
refactor: simplify agent service logic
test: add tests for authentication
```

### Branch Naming

- `feature/feature-name` for new features
- `bugfix/issue-description` for bug fixes
- `hotfix/critical-fix` for urgent fixes
- `docs/documentation-update` for documentation

## Issues

We use GitHub issues to track public bugs. Report a bug by opening a new issue.

### Bug Reports

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening)

### Feature Requests

Feature requests are welcome! Please provide:

- Clear description of the feature
- Use case or problem it solves
- Possible implementation approach
- Any alternative solutions considered

## Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-platform.git
   cd ai-platform
   ```

2. **Set up the backend**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   python init_db.py
   ```

3. **Set up the frontend**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Start development servers**
   ```bash
   # Backend (in backend/ directory)
   uvicorn main:app --reload --port 8001
   
   # Frontend (in frontend/ directory)
   npm run dev
   ```

## Testing

### Frontend Testing
```bash
cd frontend
npm test
npm run test:coverage
```

### Backend Testing
```bash
cd backend
pytest
pytest --cov=app tests/
```

## Documentation

- Update README.md if you change functionality
- Add/update API documentation for new endpoints
- Update component documentation for UI changes
- Include examples in your documentation

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Questions?

Feel free to reach out by:
- Opening an issue
- Starting a discussion
- Contacting the maintainers

Thank you for contributing! 🚀