from datetime import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Prediction(db.Model):
    __tablename__ = 'predictions'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    input_data = db.Column(db.JSON, nullable=False)
    result = db.Column(db.String(10))  # e.g. "Approved", "Rejected"
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
