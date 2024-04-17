import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Image} from "@nextui-org/react";
import { addBreakInString } from "@/constants";

export default function BlogModal({blogContent ,isOpen, onClose, onOpenChange}) {


  return (
    <>
     <Modal backdrop={'blur'} isOpen={isOpen} onClose={onClose} className="max-h-90vh max-w-70vw overflow-auto">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-2xl">{blogContent.contentTitle}</ModalHeader>
              <ModalBody>
                <p dangerouslySetInnerHTML={{ __html: addBreakInString(blogContent.text) }} className="text-medium font-medium" /> 
                {/* </p> */}
                {/* <div className="imgs-container flex flex-row justify-between items-center gap-2"> */}
                   <Image
                    alt="story-img"
                    src={blogContent.image}
                    className="w-15vw h-15vw object-cover"
                  />
                {/* </div> */}
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
