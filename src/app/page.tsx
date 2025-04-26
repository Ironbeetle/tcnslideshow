import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

function page() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#3d461f]">
      <div className="w-full max-w-md">
        <Card className="bg-[#4a543f]/90 border-[#5c664e]">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-slate-100">
              TCN Slideshow
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              asChild
              variant="outline"
              className="w-full bg-[#5c664e] hover:bg-[#6b765c] text-slate-100 border-[#6b765c]"
            >
              <Link href="/SlideshowManager">
                Slideshow Dashboard
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full bg-[#5c664e] hover:bg-[#6b765c] text-slate-100 border-[#6b765c]"
            >
              <Link href="/SlideshowCreator">
                Create Slideshow
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default page;
