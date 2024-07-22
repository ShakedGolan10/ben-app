// import { useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Image } from "@nextui-org/react";
import { addBreakInString } from "@/constants";

export default function BlogModal({ blogContent = '', isOpen, onClose, onOpenChange }) {

  return (
    <>
      <Modal backdrop={'blur'} isOpen={isOpen} onClose={onClose} className="max-h-85vh overflow-auto" style={{ 'maxWidth': 'max-content', 'marginBottom': '5vh' }}>
        <ModalContent style={{ 'margin': '3vw' }}>
          {(onClose) => (
            <>
              <ModalHeader className="text-2xl">{blogContent.contentTitle}</ModalHeader>
                {blogContent.location && <ModalHeader className="text-medium font-medium">{blogContent.location}</ModalHeader>}
              {/* style={{ 'alignItems': 'center', 'textAlign': 'right' }} */}
              <ModalBody >
                {blogContent.ingredients && <span className="text-lg font-medium">מצרכים :</span>}
                {blogContent.ingredients && <p id="content-p-blog-modal" dangerouslySetInnerHTML={{ __html: addBreakInString(blogContent.ingredients) }} className="text-medium font-medium my-2 text-right" />}
                {blogContent.ingredients && <span className="text-lg font-medium">אופן הכנה :</span>}
                {blogContent.text && <p id="content-p-blog-modal " dangerouslySetInnerHTML={{ __html: addBreakInString(blogContent.text) }} className="text-medium font-medium my-2 text-right" />}
                <div className="imgs-container self-center">
                <Image
                  alt="story-img"
                  src={blogContent.image}
                  className="object-contain"
                />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  סגור
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
