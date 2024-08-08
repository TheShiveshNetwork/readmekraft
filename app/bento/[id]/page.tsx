
const BentoGridPage = ({ params }: { params: { id: string } }) => {
    return (
        <div className="grid auto-rows-[192px] grid-cols-3 gap-4">
            <img
                src={`https://github-readme-stats.vercel.app/api?username=${params.id}&show_icons=true`}
                alt={`${params.id} Github Stats`}
                className={`row-span-1 rounded-xl border-2`}
            />
        </div>
    )
}

export default BentoGridPage