FROM python:3.6
ADD . /usr/src/app
WORKDIR /usr/src/app
EXPOSE 5000
ENV FLASK_APP app.py
ENV FLASK_RUN_HOST 0.0.0.0
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
CMD ["python", "-m", "flask", "run", "--host=0.0.0.0"]