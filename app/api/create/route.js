import { StreamChat } from "stream-chat";
import { clerkClient} from "@clerk/nextjs/server";
const api_key =process.env.STREAM_KEY;
const api_secret =process.env.STREAM_SECRET;
// const user_id = "user_2xZs5Jn2HdiH16l1mGHkKbkwnnj";
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
export async function POST(request) {


// Initialize a Server Client
    const serverClient = StreamChat.getInstance(api_key, api_secret);
// Create User Token
    const user= await request.json()
    const idv=user.data.id
    console.log(idv)

    const token = serverClient.createToken(idv);
    console.log(api_key,api_secret)
    console.log("A new user has been created" , token)
    const client = await clerkClient();
    await serverClient.upsertUser({id:idv})
    await client.users.updateUserMetadata(idv,{
        publicMetadata:{
            token:token
        }
    })
    const slugs=[
        'python-new',
        'javascript-new',
        'react-new',
        'artificial-intelligence-new',
        'cybersecurity-new'
    ]
    slugs.forEach(async (item)=> {
        const channel = serverClient.channel('messaging', item, {
            image: 'https://getstream.io/random_png/?name=react',
            name: capitalize(item)+" Forum",
            created_by_id: idv,

        });
        await channel.create();
       channel.addMembers([user.data.id]);
    })
    return Response.json({ message: 'Hello World' })
}