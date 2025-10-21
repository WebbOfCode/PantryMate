@echo off
echo ========================================
echo Starting PantryMate Application
echo ========================================
echo.

REM Start backend server
echo [1/2] Starting backend API server...
start "PantryMate Backend" cmd /k "cd backend && npm install && npm run dev"

REM Wait a moment for backend to initialize
timeout /t 3 /nobreak >nul

REM Start frontend dev server
echo [2/2] Starting frontend dev server...
start "PantryMate Frontend" cmd /k "cd frontend && npm run dev"

echo.
echo ========================================
echo PantryMate is starting!
echo ========================================
echo.
echo Backend API: http://localhost:3001
echo Frontend App: http://localhost:5173
echo.
echo Press any key to close this window...
pause >nul
