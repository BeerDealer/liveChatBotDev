@echo off
set CONTAINER_NAME=mynode 
set PORT=3002
set IMAGE=node:20.11.1-slim
set CMD=npm run dev
set HOST_VOLUME=D:\Projects\LiveChat_bot\user_bot
set CONTAINER_VOLUME=/app
set WORK_DIR=/app

docker run -it --rm --name %CONTAINER_NAME% -v %HOST_VOLUME%:%CONTAINER_VOLUME% -w %WORK_DIR% %IMAGE% %CMD%