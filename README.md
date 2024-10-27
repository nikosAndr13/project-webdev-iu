Installation Instructions to run the project locally:

After you clone the repository using:

git clone https://github.com/nikosAndr13/project-webdev-iu

1.  open the project in the code editor of your choice

2.  Install node modules by running in the terminal: npm install

3.  In the root directory of the project create a .env.local file
    (the file, should not be inside any folder and should appear underneath the utils\supabase folder)
    and add the following env variables:

        NEXT_PUBLIC_SUPABASE_URL=https://pclhkjkdacgeawvwdgem.supabase.co

        NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.     eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjbGhramtkYWNnZWF3dndkZ2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM4Nzg2MDIsImV4cCI6MjAzOTQ1NDYwMn0.    RYpTnugsb2HN4myMmdfXRNfAOzGp1TV7y3eAvQa18Ck

4.  Then run: npm run dev
