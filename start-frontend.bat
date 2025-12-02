@echo off
echo Installing dependencies...
cd frontend
call npm install

echo.
echo Starting Development Server...
echo Frontend will be available at: http://localhost:3000
echo.
call npm run dev