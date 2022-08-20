# Layout of my App

app.js renders all the components and pages based on routing.
notes data is being passed with contextApi
Notes Component then maps over the notes(obj) and renders Note
Note component then renders ViewNote based on view(btn) click

components used are:
app.js Nav.js welcome.js Notes.js Note.js viewNote.js Err.js context.js


#BEST PRACTICE

Always nest your BrowserRouter over App component in the highest root element (index.js). -- to avoid some annoying error, so that you can use useParams and useNavigate (or useLocation) in every components -- that's where your Redux Store will shoule too.

Always have your routes in a seperate file, then import it to your App component

Always nest your Context api over App component in the highest root element (index.js).

Though all these not required in small project like this, It is just the best practise incase you are making larger project -- they just make your workS look cleaner and more easily to be read and understood by other developers especially when your are working in team.