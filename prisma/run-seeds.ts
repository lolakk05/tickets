import { seed } from "./seed"

async function main() {
    await seed();
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});