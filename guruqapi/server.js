const express = require('express');
const multer = require('multer');
const path = require('path');




// Initialize Express
const app = express();
var cors = require('cors')
app.use(cors())

const fs = require('fs');

// Create the 'uploads' folder if it doesn't exist
if (!fs.existsSync('./uploads')) {
    fs.mkdirSync('./uploads');
}

// Set up storage using multer (This will store the files in the 'uploads' folder)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads'); // Directory where files will be stored
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // File name + extension
    }
});

// Initialize upload with storage options and file type filter
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        // Allow only PDF files
        if (file.mimetype === 'application/pdf') {
            cb(null, true);
        } else {
            cb(new Error('Only PDF files are allowed'), false);
        }
    }
});

// API route to handle file uploads
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded or invalid file type' });
    }
    res.json({
        message: 'File uploaded successfully',
        fileName: req.file.filename,
        filePath: `/uploads/${req.file.filename}`
    });
});

// Error handling middleware for multer
app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError || err.message === 'Only PDF files are allowed') {
        return res.status(400).json({ error: err.message });
    }
    next(err);
});

// Serve the uploads folder statically to access the files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));




// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
