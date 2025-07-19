# Contact Manager - SDN302 Practical Exam

A simple contact management web application built with Next.js, TypeScript, and Prisma for the SDN302 practical exam.

## Features

### Main Page (Contact List)
- Display all contacts with name, email, phone, and group information
- Search contacts by name
- Filter contacts by group (Friends, Family, Work, Other)
- Sort contacts by name (A-Z / Z-A)

### Create Contact
- Add new contacts with required name and email fields
- Optional phone number and group assignment
- Email format validation
- Form validation with error messages

### Edit Contact
- Click on any contact to navigate to edit page
- Modify name, email, phone, and group information
- Automatic redirect back to contact list after saving

### Delete Contact
- Delete contacts with confirmation prompt
- Visual feedback during deletion process

## Technology Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Database**: MongoDB with Prisma ORM
- **Deployment**: Ready for Vercel, Render, or Railway

## Getting Started

### Prerequisites
- Node.js 18+ 
- MongoDB database (local or MongoDB Atlas)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd sdn302-assignments
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
DATABASE_URL="your-mongodb-connection-string"
```

4. Set up the database:
```bash
npm run db:generate
npm run db:push
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Database Schema

The application uses a simple Contact model:

```prisma
model Contact {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  name      String
  email     String
  phone     String?
  group     String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## API Endpoints

- `GET /api/contacts` - Get all contacts
- `POST /api/contacts` - Create a new contact
- `GET /api/contacts/[id]` - Get a specific contact
- `PUT /api/contacts/[id]` - Update a contact
- `DELETE /api/contacts/[id]` - Delete a contact

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your `DATABASE_URL` environment variable
4. Deploy

### Other Platforms
The application can be deployed on any platform that supports Next.js:
- Render
- Railway
- Netlify
- AWS Amplify

## Exam Requirements Met

✅ **Main Page**: Display contacts with search, filter, and sort functionality  
✅ **Create Contact**: Add new contacts with validation  
✅ **Edit Contact**: Modify existing contacts  
✅ **Delete Contact**: Remove contacts with confirmation  
✅ **Database**: MongoDB with Prisma ORM  
✅ **Deployment Ready**: Configured for free hosting platforms  
✅ **GitHub Repository**: Source code management  

## Project Structure

```
src/
├── app/
│   ├── api/posts/          # API routes for contacts
│   ├── contacts/           # Contact pages (new, edit)
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main contact list page
├── components/
│   └── ContactCard.tsx     # Contact display component
└── lib/
    ├── db.ts              # Prisma client
    └── types.ts           # TypeScript interfaces
```

## Contributing

This is a practical exam project for SDN302. The code is structured to demonstrate:
- Full-stack web development
- Database integration
- API design
- User interface design
- Form validation
- Error handling

## License

This project is created for educational purposes as part of the SDN302 practical exam.
