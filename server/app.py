from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
import os
import cloudinary.uploader
from dotenv import load_dotenv

# Initialize extensions
db = SQLAlchemy()
migrate = Migrate()

# Load environment variables from .env
load_dotenv()

# Create the app
def create_app():
    app = Flask(__name__)
    CORS(app)  # Enable Cross-Origin Resource Sharing

    # Load configuration from config.py
    app.config.from_object('config.Config')

    # Initialize extensions with app context
    db.init_app(app)
    migrate.init_app(app, db)

    # Route to handle image upload to Cloudinary
    @app.route('/upload', methods=['POST'])
    def upload():
        if 'file' not in request.files:
            return jsonify({"error": "No file uploaded"}), 400

        file = request.files['file']
        result = upload_to_cloudinary(file)
        return jsonify({"url": result}), 200

    # Return the app instance
    return app

# Utility function to handle file upload to Cloudinary
def upload_to_cloudinary(file):
    result = cloudinary.uploader.upload(file)
    return result['secure_url']

# Set up Cloudinary configuration
cloudinary.config(
    cloud_name=os.getenv('CLOUDINARY_CLOUD_NAME'),
    api_key=os.getenv('CLOUDINARY_API_KEY'),
    api_secret=os.getenv('CLOUDINARY_API_SECRET')
)




# from flask import Flask
# from flask_sqlalchemy import SQLAlchemy
# from flask_migrate import Migrate
# from flask_cors import CORS
# import os
# # from app import db
# # from dotenv import load_dotenv
# # import cloudinary
# # from config import Config

# db = SQLAlchemy()
# migrate = Migrate()

# # load_dotenv()


# def create_app():
#     app = Flask(__name__)

#     app.config.from_object(os.getenv('FLASK_ENV') or 'config.DevelopmentConfig')

#     db.init_app(app)
#     migrate.init_app(app, db)

#     from server.models import User, Image
#     with app.app_context():
#         db.create_all()

#     from .routes import main
#     app.register_blueprint(main)

#     return app
