import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { processFaviconImage } from '@/utils/processFavicon';
import { Download, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export const FaviconProcessor = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);

  const handleProcessFavicon = async () => {
    setIsProcessing(true);
    try {
      const processedUrl = await processFaviconImage('/lovable-uploads/81122b8c-5af3-4c5e-a42a-f0b7d9a0032b.png');
      setProcessedImageUrl(processedUrl);
      toast.success('Background removed successfully!');
    } catch (error) {
      console.error('Error processing favicon:', error);
      toast.error('Failed to process favicon. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (processedImageUrl) {
      const link = document.createElement('a');
      link.href = processedImageUrl;
      link.download = 'lakshx-favicon-transparent.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle>Favicon Background Removal</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">
            Current favicon (with white background):
          </p>
          <img 
            src="/lovable-uploads/81122b8c-5af3-4c5e-a42a-f0b7d9a0032b.png" 
            alt="Current favicon" 
            className="w-16 h-16 border rounded"
          />
        </div>

        {processedImageUrl && (
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">
              Processed favicon (transparent background):
            </p>
            <img 
              src={processedImageUrl} 
              alt="Processed favicon" 
              className="w-16 h-16 border rounded bg-gray-100"
            />
          </div>
        )}

        <div className="flex gap-2">
          <Button 
            onClick={handleProcessFavicon} 
            disabled={isProcessing}
            className="flex-1"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              'Remove Background'
            )}
          </Button>

          {processedImageUrl && (
            <Button onClick={handleDownload} variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};