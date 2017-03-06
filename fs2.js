r    Open file for reading. An exception occurs if the file does not exist.
r+    Open file for reading and writing. An exception occurs if the file does not exist.
rs    Open file for reading in synchronous mode.
rs+    Open file for reading and writing, telling the OS to open it synchronously. See notes for 'rs' about using this with caution.
w    Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
wx    Like 'w' but fails if path exists.
w+    Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
wx+    Like 'w+' but fails if path exists.
a    Open file for appending. The file is created if it does not exist.
ax    Like 'a' but fails if path exists.
a+    Open file for reading and appending. The file is created if it does not exist.
ax+    Like 'a+' but fails if path exists.





fs.open("index", r+, function(err, data))