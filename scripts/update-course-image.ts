import prisma from '../lib/prisma';

async function main() {
    // Replace this URL with your actual Supabase image URL after uploading
    const imageUrl = 'https://your-project.supabase.co/storage/v1/object/public/course-images/weekendlessen.jpg';
    
    await prisma.course.update({
        where: {
            slug: 'weekendlessen'
        },
        data: {
            image: imageUrl
        }
    });

    console.log('Course image updated successfully!');
}

main()
    .catch((e) => {
        console.error('Error updating course image:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    }); 