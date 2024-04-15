import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Image} from "@nextui-org/react";

export default function BlogModal({blogContent ,isOpen, onClose, onOpenChange}) {


  return (
    <>
     <Modal backdrop={'blur'} isOpen={isOpen} onClose={onClose} className="max-h-90vh max-w-70vw overflow-auto">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-2xl">{blogContent.contentTitle}</ModalHeader>
              <ModalBody>
                <p className="text-medium font-medium"> 
                  {blogContent.text}
                </p>
                <div className="imgs-container flex flex-row justify-between items-center gap-2">
                {blogContent.image.map((image,idx) => {
                  return <Image
                    alt="story-img"
                    key={idx}
                    src={image.src}
                    className="min-w-15vw min-h-15vw"
                  />
                })}
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
